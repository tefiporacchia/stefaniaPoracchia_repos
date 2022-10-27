import {render, screen, cleanup} from '@testing-library/react';
import React from 'react';
import InfoCard from "../infoCard";


describe('Main page mount', () => {

    let pokemon;

    beforeAll( () => {
        pokemon = {
            name:'charizard',
            id:3,
            types:[{type:{name:"grass"}},{type:{name:"ice"}},{type:{name:"sun"}}],
            weight:45,
            sprites:{back_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/252.png",
                    back_female:null,
                    back_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/252.png",
                    back_shiny_female:null,
                    front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
                    front_female:null,
                    front_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/252.png",
                    front_shiny_female:null,
                other: {
                    dream_world: {
                        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
                    }
                }
            },
            moves:[{move:{name:"mega-punch"}},{move:{name:"double-kick"}},{move:{name:"double-edge"}}],
        }
    });

    test("must display the pokemon id", () => {
        render(<InfoCard element={pokemon}/>);
        expect(screen.getByText("#03")).toBeInTheDocument();
    })

    test("must display the pokemon picture", () => {
        render(<InfoCard element={pokemon}/>);
        const img = screen.getAllByRole('img');
        expect(img[0]).toHaveAttribute('src', pokemon.img);
        expect(img[0]).toHaveAttribute('alt', 'charizard');
    })

    test("must display the pokemon name", () => {
        render(<InfoCard element={pokemon}/>);
        expect(screen.getByText("Charizard")).toBeInTheDocument()
    })

    test("must display the pokemon weight", () => {
        render(<InfoCard element={pokemon}/>);
        expect(screen.getByText("45kg")).toBeInTheDocument()
    })

    test("must display the pokemon types", () => {
        render(<InfoCard element={pokemon}/>);
        expect(screen.getByText("grass, ice, sun")).toBeInTheDocument()
    })

    test("must display the pokemon moves", () => {
        render(<InfoCard element={pokemon}/>);
        expect(screen.getByText("mega-punch, double-kick, double-edge")).toBeInTheDocument()
    })

    test("must display the pokemon sprites", () => {
        const {container} = render(<InfoCard element={pokemon}/>);
        //tiene que estar el picture group
        expect(container.getElementsByClassName('picture-group').length).toBe(1);
        //tiene que haber 4 circles
        expect(container.getElementsByClassName('circle').length).toBe(4);

        const img = screen.getAllByRole('img');
        //imagenes de los 4 circles
        expect(img[1]).toHaveAttribute('src', pokemon.sprites.back_default);
        expect(img[2]).toHaveAttribute('src', pokemon.sprites.back_shiny);
        expect(img[3]).toHaveAttribute('src', pokemon.sprites.front_default);
        expect(img[4]).toHaveAttribute('src', pokemon.sprites.front_shiny);

    })

})

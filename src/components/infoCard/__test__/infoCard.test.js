import {render, screen, cleanup} from '@testing-library/react';
import React from 'react';
import InfoCard from "../infoCard";


describe('Main page mount', () => {

    let pokemon;

    beforeAll( () => {
        pokemon = {
            name:'charizard',
            img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
            id:3
        }
    });

    it("must display the pokemon id", () => {
        render(<InfoCard element={pokemon}/>);
        expect(screen.getByText("#03")).toBeInTheDocument();
    })

    it("must display the pokemon picture", () => {
        render(<InfoCard element={pokemon}/>);
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', pokemon.img);
        expect(img).toHaveAttribute('alt', 'charizard');
    })

    it("must display the pokemon name", () => {
        render(<InfoCard element={pokemon}/>);
        expect(screen.getByText("charizard")).toBeInTheDocument()
    })

    it("must display the pokemon weight", () => {
        render(<InfoCard element={pokemon}/>);
        expect(screen.getByText("charizard")).toBeInTheDocument()
    })

    it("must display the pokemon types", () => {
        render(<InfoCard element={pokemon}/>);
        expect(screen.getByText("charizard")).toBeInTheDocument()
    })


})

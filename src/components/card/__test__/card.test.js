import {render, screen, cleanup} from '@testing-library/react';
import React from 'react';
import Card from "../card";
import renderer from "react-test-renderer";

describe('Card Tests', () => {

    let pokemon;

    beforeAll( () => {
        pokemon = {
            name:'charizard',
            img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
            id:3
        }
    });

    test('renders correctly', () => {
        const tree = renderer
            .create(<Card name={pokemon.name} id={pokemon.id} image={pokemon.img} onClick={jest.fn()}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("must display the pokemon id", async () => {
        render(<Card name={pokemon.name} id={pokemon.id} image={pokemon.img} onClick={jest.fn()}/>);
        await expect(screen.getByText("#03")).toBeInTheDocument();
    })

    test("must display the pokemon picture", async () => {
        render(<Card name={pokemon.name} id={pokemon.id} image={pokemon.img} onClick={jest.fn()}/>);
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', pokemon.img);
        await expect(img).toHaveAttribute('alt', 'charizard');
    })

    test("must display the pokemon name", async () => {
        render(<Card name={pokemon.name} id={pokemon.id} image={pokemon.img} onClick={jest.fn()}/>);
        await expect(screen.getByText("Charizard")).toBeInTheDocument()
    })


})
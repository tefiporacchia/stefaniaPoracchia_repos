import {render, screen, cleanup} from '@testing-library/react';
import React from 'react';
import InfoCard from "../infoCard";

/*
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
        render(<Card name={pokemon.name} id={pokemon.id} image={pokemon.img} onClick={jest.fn()}/>);
        expect(screen.getByText("#03")).toBeInTheDocument();
    })

    it("must display the pokemon picture", () => {
        render(<Card name={pokemon.name} id={pokemon.id} image={pokemon.img} onClick={jest.fn()}/>);
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', pokemon.img);
        expect(img).toHaveAttribute('alt', 'charizard');
    })

    it("must display the pokemon name", () => {
        render(<Card name={pokemon.name} id={pokemon.id} image={pokemon.img} onClick={jest.fn()}/>);
        expect(screen.getByText("charizard")).toBeInTheDocument()
    })


})*/

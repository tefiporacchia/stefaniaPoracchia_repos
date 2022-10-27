import {render, screen, cleanup} from '@testing-library/react';
import React from 'react';
import CardGroup from "../cardGroup";

describe('Main page mount', () => {

    let cards;

    beforeAll( () => {

        cards = [{back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"},
                {back_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"},
                {back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"},
                {back_shiny_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"},
                {front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"},
                {front_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"},
                {front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"},
                {front_shiny_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"}

    ]

    });

    it("must be displayed ", () => {
        render(<CardGroup elems={cards}/>);
        expect(screen.getByText("#01")).toBeInTheDocument();
    })

    it("must display 4 pictures or less", () => {
        render(<CardGroup elems={cards}/>);
        const img1 = screen.getAllByRole("img");
        expect(img1).toHaveAttribute('src', cards[0].img);
        expect(img1).toHaveAttribute('alt', 'charizard');
    })



})
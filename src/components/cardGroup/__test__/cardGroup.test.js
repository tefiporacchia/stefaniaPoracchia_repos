import {render, screen, cleanup} from '@testing-library/react';
import React from 'react';
import CardGroup from "../cardGroup";

describe('Main page mount', () => {

    let cards;

    beforeAll( () => {

        cards = [
            {
                name:'charizard',
                sprites: {
                    other: {
                        dream_world: {
                            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
                        }
                    }
                },
                id:1
            },
            {
                name:'woopy',
                sprites: {
                    other: {
                        dream_world: {
                            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
                        }
                    }
                },
                id:2
            },
            {
                name:'daisy',
                sprites: {
                    other: {
                        dream_world: {
                            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
                        }
                    }
                },
                id:3
            },
            {
                name:'snow',
                sprites: {
                    other: {
                        dream_world: {
                            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
                        }
                    }
                },
                id:4
            }]
    });

    it("must display all ids", () => {
        render(<CardGroup elems={cards}/>);
        expect(screen.getByText("#01")).toBeInTheDocument();
        expect(screen.getByText("#02")).toBeInTheDocument();
        expect(screen.getByText("#03")).toBeInTheDocument();
        expect(screen.getByText("#04")).toBeInTheDocument();
    })

    it("must display all pictures", () => {
        render(<CardGroup elems={cards}/>);
        const img1 = screen.getAllByRole("img");
        expect(img1).toHaveAttribute('src', cards[0].img);
        expect(img1).toHaveAttribute('alt', 'charizard');
    })

    it("must display the pokemon name", () => {
        render(<CardGroup elems={cards}/>);
        expect(screen.getByText("charizard")).toBeInTheDocument();
        expect(screen.getByText("woopy")).toBeInTheDocument();
        expect(screen.getByText("daisy")).toBeInTheDocument();
        expect(screen.getByText("snow")).toBeInTheDocument();
    })


})
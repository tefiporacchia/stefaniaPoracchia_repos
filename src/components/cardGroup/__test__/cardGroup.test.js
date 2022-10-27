import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
import CardGroup from "../cardGroup";

describe('Card Group Tests', () => {

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
                            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/43.png',
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
                            front_default: 'ttps://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/39.png',
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
                            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
                        }
                    }
                },
                id:4
            }]
    });

    test('renders correctly', () => {
        const tree = renderer
            .create(<CardGroup elems={cards}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("must display all ids", () => {
        render(<CardGroup elems={cards}/>);
        expect(screen.getByText("#01")).toBeInTheDocument();
        expect(screen.getByText("#02")).toBeInTheDocument();
        expect(screen.getByText("#03")).toBeInTheDocument();
        expect(screen.getByText("#04")).toBeInTheDocument();
    })

    test("must display all pictures", () => {
        render(<CardGroup elems={cards}/>);
        const img1 = screen.getAllByRole("img");
        expect(img1[0]).toHaveAttribute('src', cards[0].img);
        expect(img1[0]).toHaveAttribute('alt', 'charizard');
        expect(img1[1]).toHaveAttribute('src', cards[1].img);
        expect(img1[1]).toHaveAttribute('alt', 'woopy');
        expect(img1[2]).toHaveAttribute('src', cards[2].img);
        expect(img1[2]).toHaveAttribute('alt', 'daisy');
        expect(img1[3]).toHaveAttribute('src', cards[3].img);
        expect(img1[3]).toHaveAttribute('alt', 'snow');
    })

    test("must display the pokemons names", () => {
        render(<CardGroup elems={cards}/>);
        expect(screen.getByText("Charizard")).toBeInTheDocument();
        expect(screen.getByText("Woopy")).toBeInTheDocument();
        expect(screen.getByText("Daisy")).toBeInTheDocument();
        expect(screen.getByText("Snow")).toBeInTheDocument();
    })


})
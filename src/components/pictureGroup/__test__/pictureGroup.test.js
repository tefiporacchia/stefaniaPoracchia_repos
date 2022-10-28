import {render, screen, cleanup} from '@testing-library/react';
import React from 'react';
import PictureGroup from "../pictureGroup";

describe('Picture Group Tests', () => {

    let pictures;

    beforeAll( () => {

        pictures = ["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"

        ]
    });

    it("displays images", () => {
        render(<PictureGroup elems={pictures}/>);
        const img1 = screen.getAllByRole("img");
        expect(img1[0]).toHaveAttribute('src', pictures[0].img);
        expect(img1[1]).toHaveAttribute('src', pictures[1].img);
        expect(img1[2]).toHaveAttribute('src', pictures[2].img);


    })



})
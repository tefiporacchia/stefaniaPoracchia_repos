import {render, screen, cleanup} from '@testing-library/react';
import React from 'react';
import Card from "../card";

describe('Main page mount', () => {

    it("must display the main page title", () => {
        render(<Card/>);
        expect(screen.getByText("hola")).toBeInTheDocument()
    })

})
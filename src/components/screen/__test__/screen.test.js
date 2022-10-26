import {render, screen, cleanup} from '@testing-library/react';
import React from 'react';
import Screen from "../screen";

describe('Main page mount', () => {

    it("must display the main page title", () => {
        render(<Screen/>);
        expect(screen.getByText("Listado de Pokemon")).toBeInTheDocument()
    })

})
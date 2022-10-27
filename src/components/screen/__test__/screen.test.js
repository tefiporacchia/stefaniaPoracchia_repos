import {render, screen, cleanup} from '@testing-library/react';
import React from 'react';
import Screen from "../screen";

describe('Main page mount', () => {

    it("must display the main page title", () => {
        render(<Screen/>);
        expect(screen.getByText("Listado de Pokemon")).toBeInTheDocument()
    })

    it("must have cards", () => {
        render(<Screen/>);
        const card = screen.getByTestId('card');
        expect(card).toBeInTheDocument()
    })

    it("must display a big card", () => {
        render(<Screen/>);
        const card = screen.getByTestId('card');
        expect(card).toBeInTheDocument()
    })

    it("must have a search bar", () => {
        render(<Screen/>);
        const card = screen.getByTestId('card');
        expect(card).toBeInTheDocument()
    })

    it("must change cards with arrows", () => {
        render(<Screen/>);
        const card = screen.getByTestId('card');
        expect(card).toBeInTheDocument()
    })



})
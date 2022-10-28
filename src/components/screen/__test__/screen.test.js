import {render, screen, cleanup} from '@testing-library/react';
import React from 'react';
import Screen from "../screen";
import renderer from "react-test-renderer";

describe('Main page mount', () => {

    test('renders correctly', () => {
        const tree = renderer
            .create(<Screen elems={cards}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("must show the screen", async () => {
        await expect(screen.getByTestId("screen")).toBeInTheDocument();
    })

    it("must display the main page title", async () => {
        render(<Screen/>);
        await expect(screen.getByText("Listado de Pokemon")).toBeInTheDocument()
    })

    it("must have cards", async () => {
        const {container} = render(<Screen/>);
        await expect(container.getElementsByClassName('card-group').length).toBe(1);
    })

    it("must display an information card", async () => {
        const {container} = render(<Screen/>);
        await expect(screen.getByTestId("info-card").length).toBe(1);
    })

    it("must have a search bar", async () => {
        const {container} = render(<Screen/>);
        await expect(container.getElementsByClassName('input-field').length).toBe(1);
    })

    it("has buttons", async () => {
        const {container} = render(<Screen/>);
        await expect(container.getElementsByClassName('buttons').length).toBe(1);
    })


})
import {render, screen, cleanup, waitFor} from '@testing-library/react';
import React from 'react';
import SearchBar from "../searchBar";
import userEvent from "@testing-library/user-event";

describe('SearchBar', () => {

    it("must exist", () => {
        const {container} = render(<SearchBar/>);
        expect(container.getElementsByClassName('search-bar').length).toBe(1);

    })

    it("must have input field", () => {
        const {container} = render(<SearchBar/>);
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        expect(container.getElementsByClassName('input-field').length).toBe(1);

    })

    it("must display the word buscar by default", () => {
        const {container} = render(<SearchBar/>);
        const input = container.querySelector('.input-field');
        expect(input.placeholder).toBe('Buscar');

    })

    it("must display the word hello", async () => {
        const {container} = render(<SearchBar/>);
        const input = container.querySelector('.input-field');
        userEvent.clear(input)
        userEvent.type(input, "hello")
        await waitFor(() => {
            expect(screen.getByTestId('searchBar')).toHaveValue("hello");
        });
    })


})
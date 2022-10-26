import {render, screen, cleanup} from '@testing-library/react';
import Screen from "../screen";

test('should render screen component', () => {
    render(<Screen/>);
    const screenElement = screen.getByTestId('screen');
    expect(screenElement).toBeInTheDocument();
    //expect(screenElement).toHaveTextContent("Screen");
})
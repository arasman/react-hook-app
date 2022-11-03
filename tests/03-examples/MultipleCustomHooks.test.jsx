import { fireEvent, render, renderHook, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples"
import { useCounter, useFetch } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');
describe('<MultipleCustomHook/> tests', () => {
    
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test('Must show the component with default settings ', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });
      render(<MultipleCustomHooks/>);
      expect(screen.getByText('Loading...'));
      expect(screen.getByText('Breaking Bad Quotes'));

      const nextButton = screen.getByRole('button', {name: 'Next quote'});
      expect(nextButton.disabled).toBeTruthy();
    //   screen.debug();
    })
    test('Must display a Quote', () => {
        useFetch.mockReturnValue({
            data: [{author: 'ARAS', quote: 'Hello world'}],
            isLoading: false,
            hasError: null,
        });
        render(<MultipleCustomHooks/>);
        expect(screen.getByText('Hello world')).toBeTruthy();
        expect(screen.getByText('ARAS')).toBeTruthy();
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
      expect(nextButton.disabled).toBeFalsy();
        screen.debug();
      
    });

    test('must call the function of increment', () => {
        useFetch.mockReturnValue({
            data: [{author: 'ARAS', quote: 'Hello world'}],
            isLoading: false,
            hasError: null,
        });
        render(<MultipleCustomHooks/>);
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalled();
    })
    
    
  
})

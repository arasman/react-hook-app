import { act, renderHook } from "@testing-library/react";
import { func } from "prop-types";
import { useCounter } from "../../src/hooks";

describe('useCounter Tests', () => {
    test('Returning default values', () => {
        const {result} = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;
        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
      
    })
    test('Returning value of 100', () => {
        const {result} = renderHook(() => useCounter(100));
        const { counter, decrement, increment, reset } = result.current;
        expect(counter).toBe(100);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
      
    })
    test('Must increment the counter', () => {
        const {result} = renderHook(() => useCounter());
        const { counter, reset, increment, decrement } = result.current;
        act(() => {
            increment();
            decrement(2);
        });
        expect(result.current.counter).toBe(9);
      
    })

    
    test('Must reset the counter', () => {
        const initialValue = 10;
        const {result} = renderHook(() => useCounter(initialValue));
        const { counter, reset, increment, decrement } = result.current;
        act(() => {
            increment();
            decrement(3);
            reset();
        });
        expect(result.current.counter).toBe(initialValue);
      
    })
    
})

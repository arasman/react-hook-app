import { act, fireEvent, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks"

describe('useForm tests', () => {
    const initialForm = {
        name: 'aras',
        email: 'aras@test.com'
    }
    test('Must return default information', () => {
      const {result} = renderHook(() => useForm(initialForm));
      expect(result.current).toEqual({
        name: initialForm.name,
        email: initialForm.email,
        formState: initialForm,
        onInputChange: expect.any(Function),
        onResetForm: expect.any(Function)
      });
    })
    test('Must change the name field', () => {
        const newValue = 'John';
        const {result} = renderHook(() => useForm(initialForm));
        const {onInputChange} = result.current;
        act(() => {
            onInputChange({
                target: {
                name: 'name',
                value: newValue
                }
            });
        })
        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });  
    test('Must reset the name field', () => {
        const newValue = 'John';
        const {result} = renderHook(() => useForm(initialForm));
        const {onInputChange, onResetForm} = result.current;
        act(() => {
            onInputChange({
                target: {
                name: 'name',
                value: newValue
                }
            });
            onResetForm();
        })
        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });  
})

import {todoReducer} from '../../src/08-useReducer';

describe('todoReducer tests', () => {
    const initialState = [{
        id:1,
        description: 'Demo Todo',
        done: false,
    }]
    test('Must return the initial state', () => { 
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('A todo must be added', () => { 
        const action = {
            type: 'Add-Todo',
            payload: {
                id:2,
                description: 'New todo',
                done: false,
            }
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('An existent todo must be deleted', () => {
        const action = {
            type: 'Remove-Todo',
            payload: 1
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    })

    test('perform a toggle todo ', () => {
        const action = {
            type: 'Toggle-Todo',
            payload: 1
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(1);
        expect(newState[0].done).toBeTruthy();
        const newState2 = todoReducer(newState, action);
        expect(newState2[0].done).toBeFalsy();
    })
  
})

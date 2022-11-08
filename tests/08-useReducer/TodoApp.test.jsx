import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer"
import { useTodos } from "../../src/hooks/useTodos"


jest.mock('../../src/hooks/useTodos');

describe('TodoApp tests', () => {
    useTodos.mockReturnValue({
        todos: [
            {id:1, description:'Todo 1', done: false},
            {id:2, description:'Todo 2', done: true}
        ],
        todosCount: () => 2,
        pendingTodosCount: () => 1,
        handleNewTodo : jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleToDo: jest.fn()
    });
    test('should display the component', () => {
        const app = render(<TodoApp/>);
        screen.debug();
        expect(app).toMatchSnapshot();
        expect( screen.getByText('Todo 1')).toBeTruthy();
        expect( screen.getByText('Todo 2')).toBeTruthy();
        expect( screen.getByRole('textbox')).toBeTruthy();
        expect( screen.getByRole('textbox').name).toBe('description');
    })
    
  
})

import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer";

describe('<TodoItem/> Tests', () => { 
    const todo = {
        id: 1,
        description: 'Soul stone',
        done: false
    };
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })
    test('Should display the pending TODO to be completed', () => {
      render(<TodoItem 
            todo={todo}
            onToggleToDo={onToggleTodoMock}
            onDeleteToDo= {onDeleteTodoMock}
        />);

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');
        //console.log(liElement.innerHTML);

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className).toContain('align-self-center');
        expect( spanElement.className).not.toContain('text-decoration-line-through');
        console.log(spanElement);
        screen.debug();
        
    })
    
    
    test('Should display the TODO as completed', () => {
        todo.done = true;

        render(<TodoItem 
              todo={todo}
              onToggleToDo={onToggleTodoMock}
              onDeleteToDo= {onDeleteTodoMock}
          />);
  
          const spanElement = screen.getByLabelText('span');
          expect( spanElement.className).toContain('text-decoration-line-through');
          console.log(spanElement);
        //   screen.debug();
          
      })

      test('ToggleTodo Should be called', () => {

        render(<TodoItem 
              todo={todo}
              onToggleToDo={onToggleTodoMock}
              onDeleteToDo= {onDeleteTodoMock}
          />);
  
          const spanElement = screen.getByLabelText('span');
          fireEvent.click(spanElement);
          expect( onToggleTodoMock).toHaveBeenCalledWith(todo.id);
        //   screen.debug();
          
      })

      test('DeleteTodo Should be called', () => {

        render(<TodoItem 
              todo={todo}
              onToggleToDo={onToggleTodoMock}
              onDeleteToDo= {onDeleteTodoMock}
          />);
  
          const deleteButton = screen.getByRole('button');
          fireEvent.click(deleteButton);
          expect( onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
          screen.debug();
          
      })
})
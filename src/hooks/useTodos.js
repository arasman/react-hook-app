import { useEffect , useReducer } from "react";
import { todoReducer } from "../08-useReducer";

const initialState = [];
    
const init = () => {
    if (localStorage.getItem('todos') == null) return [];
    return JSON.parse(localStorage.getItem('todos'));
}
export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || []);
    }, [todos])
    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add-Todo',
            payload: todo
        };
        dispatch(action);
    }
    const handleDeleteTodo = (id) => {
        const action = {
            type: 'Remove-Todo',
            payload: id
        };
        dispatch(action);
    }
    const handleToggleToDo = (id) => {
        const action = {
            type: 'Toggle-Todo',
            payload: id
        };
        dispatch(action);
    }
    const todosCount = () => {
        return todos.length;
    }
    const pendingTodosCount = () => {
        return todos.filter(todo => !todo.done).length;
    }
  return {
    todos,
    handleNewTodo, 
    handleDeleteTodo, 
    handleToggleToDo,
    todosCount,
    pendingTodosCount
  }
}

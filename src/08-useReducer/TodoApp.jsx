import { useEffect } from "react";
import { useReducer } from "react";
import { TodoList, TodoItem, TodAdd } from "./";
import { todoReducer } from "./todoReducer";

const initialState = [
//   {
//     id: new Date().getTime(),
//     description: "Collect the soul stone",
//     done: false,
//   }
];

const init = () => {
    if (localStorage.getItem('todos') == null) return [];
    return JSON.parse(localStorage.getItem('todos'));
}
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos) || []);
  }, [todos])
  
const handleNewTodo = (todo) => {
    //console.log(JSON.stringify(todo));
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
    //console.log(id);
    const action = {
        type: 'Toggle-Todo',
        payload: id
    };
    dispatch(action);
}
  return (
    <>
      <h1>TodoApp (10) <small>pending: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList itemList={todos}
          onRemoveTodo={handleDeleteTodo}
          onToggleToDo={handleToggleToDo}
          />
        </div>
        <div className="col-5">
            <h4>Add Todo</h4>
            <hr/>
            <TodAdd onNewTodo={handleNewTodo}/>
        </div>
      </div>
    </>
  );
};

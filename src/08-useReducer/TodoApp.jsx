
import { useTodos } from "../hooks/useTodos";
import { TodoList, TodoItem, TodAdd } from "./";


export const TodoApp = () => {
  const {todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleToDo} = useTodos();

  return (
    <>
      <h1>TodoApp ({todosCount()}) <small>pending: {pendingTodosCount()}</small></h1>
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

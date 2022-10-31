import React from 'react'

export const TodoItem = ({todo,onDeleteToDo, onToggleToDo}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
            className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through': ''}`}
            onClick={() => onToggleToDo(todo.id)}
        >
            {todo.description}
        </span>
        <button 
            className="btn btn-danger"
            onClick={() => onDeleteToDo(todo.id)}>Remove</button>
    </li>
  )
}

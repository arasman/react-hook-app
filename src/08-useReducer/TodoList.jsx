import React from 'react'
import { TodoItem } from "./TodoItem"

export const TodoList = ({itemList = [], onRemoveTodo, onToggleToDo}) => {
  return (
    <>
        <ul className="list-group">
        {
            itemList.map(item => (
            <TodoItem 
            key={item.id}
            todo={item}
            onDeleteToDo={onRemoveTodo}
            onToggleToDo={ onToggleToDo }
            />
            ))
        }          
    </ul>
  </>
  )
}




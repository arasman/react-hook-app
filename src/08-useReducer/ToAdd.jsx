import React from 'react'
import { useState } from 'react';
import { useForm } from '../hooks';


export const TodAdd = ({onNewTodo}) => {
  const {description, onInputChange, onResetForm} = useForm({
    description: ''
  })
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    }
    onResetForm();
    onNewTodo(newTodo);
  }
  return (
    <>
        <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder="What do you want to do?"
                    className="form-control"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                  />
                <button 
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                    >Add</button>
            </form>
    </>
  )
}


// export const TodAdd = ({onSubmit}) => {
//   const [info, setInfo] = useState('')
//   const onHandleClick = (e) => {
//     e.preventDefault();
//     const todo = {
//       id: new Date().getTime(),
//       description: {info},
//       done: false,
//     }
//     setInfo('');
//     onSubmit(todo);
//   }
//   const onHandleChange = ({target}) => {
//     setInfo(target.value)
//   }
//   return (
//     <>
//         <form>
//                 <input
//                     type="text"
//                     placeholder="What do you want to do?"
//                     className="form-control"
//                     value={info}
//                     onChange={onHandleChange}
//                   />
//                 <button 
//                     type="submit"
//                     className="btn btn-outline-primary mt-1"
//                     onClick={onHandleClick}
//                     >Add</button>
//             </form>
//     </>
//   )
// }

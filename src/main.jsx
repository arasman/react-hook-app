import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { CounterApp } from './01-useState/Counterapp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './02-useEfect/FormWithCustomHook'
import { SimpleForm } from './02-useEfect/SimpleForm'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocuesScreen } from './04-useRef/FocuesScreen'
import { Layout } from './05-useLayoutEfect/Layout'
import { CallbackHook } from './06-memos/CallbackHook'
import { MemoHook } from './06-memos/MemoHook'
import { Memorize } from './06-memos/Memorize'
import { Padre } from './07-tarea-memo/Padre'
import { HooksApp } from './HooksApp'
import './index.css'
// import './08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-UseContext/MainApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
   {/* <React.StrictMode> */}
    {/* <> */}
    {/* <HooksApp /> */}
    {/* <CounterApp/> */}
    {/* <CounterWithCustomHook/> */}
    {/* <SimpleForm/> */}
    {/* <FormWithCustomHook/> */}
    {/* <MultipleCustomHooks/> */}
    {/* <FocuesScreen/> */}
    {/* <Layout/> */}
    {/* <Memorize/> */}
    {/* <MemoHook/> */}
    {/* <CallbackHook/> */}
    {/* <Padre/> */}
    {/* <TodoApp/> */}
    <MainApp/>
    {/* </> */}
   {/* </React.StrictMode> */}
   </BrowserRouter>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
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
import { HooksApp } from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
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
    <CallbackHook/>
  </React.StrictMode>
)

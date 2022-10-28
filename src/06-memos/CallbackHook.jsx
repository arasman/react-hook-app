import { useCallback } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {
    const [counter, setCounter] = useState (0)
    //Memorized function
    const incrementFather = useCallback(
      (incrementValue) => {
        // setCounter(counter+1);; the counter is memorized
        setCounter((currentCounter) => currentCounter +incrementValue); //Here the value increments
      },
      [],
    )
    
      useEffect(() => {
        //incrementFather();
      }, []); //if there is like [incrementFather], in this case the method of incrementFather always be a different (different memo position) making an infinite loop by useEffect
      
    // const incrementFather = () => {
    //     setCounter(counter+1);
    // }
  return (
    <>
        <h1>useCallback Hook: {counter}</h1>
        <hr/>
        <ShowIncrement increment={incrementFather}/>
    </>
  )
}

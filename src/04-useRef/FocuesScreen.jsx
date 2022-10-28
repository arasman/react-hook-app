import { useRef } from "react";

export const FocuesScreen = () => {
    const inputRef = useRef();
    // console.log(inputRef)
    const onClick = () => {
        // document.querySelector('input').select();
        console.log(inputRef)
        inputRef.current.select();
    }
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input 
      type="text"
      placeholder="Enter your name" 
      className="form-control"
      ref={inputRef}
      />

      <button 
        className="btn btn-primary mt-2"
        onClick={onClick}
        >
        Set Focus
      </button>
    </>
  );
};

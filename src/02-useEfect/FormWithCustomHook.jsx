import { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  const {formState, onInputChange, username, email, password} = useForm({
    username: '',
    email: '',
    password: ''
  })
  //const { username, email, password } = formState;

  

  return (
    <>
      <h1>Simple form with custom hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="User name"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="youremail@tes.com"
        name="email"
        email={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        email={password}
        onChange={onInputChange}
      />
      {
        username === 'strider2' && <Message/>
      }
    </>
  );
};

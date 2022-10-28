import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider",
    email: "pending@test.com",
  });
  const { username, email } = formState;


  useEffect(() => {
    // console.log('useEffect called')
  },[])
  useEffect(() => {
    // console.log('useEffect changed')
  },[formState])
  useEffect(() => {
    // console.log('email changed')
  },[email])

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };
  return (
    <>
      <h1>Simple form</h1>
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
      {
        username === 'strider2' && <Message/>
      }
    </>
  );
};

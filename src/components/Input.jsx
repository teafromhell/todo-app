import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import './Input.scss'

function Input({ tasks, setTask }) {
  const [input, setInput] = useState("");
  const submitTask = (e) => {
    e.preventDefault();
    setTask([
      ...tasks,
      {
        text: input,
        completed: false,
        active: true,
        id: uuidv4(),
      },
    ]);
    setInput("");
  };
  return (
    <form action="submit" className="form">
      <input
        type="text"
        placeholder="Create a new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='form__input'
      />
      <button className="form__btn" onClick={submitTask}></button>
    </form>
  );
}

export default Input;

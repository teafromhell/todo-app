import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import styles from "./Input.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCount, setTask } from "../features/tasks/tasksSlice";

function Input() {
  const { count, tasks } = useSelector((state) => state.tasksRedux);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const submitTask = (e) => {
    e.preventDefault();
    if (input.length) {
      dispatch(
        setTask([
          ...tasks,
          {
            text: input,
            completed: false,
            id: uuidv4(),
          },
        ])
      );
      setInput("");
      dispatch(setCount(count + 1));
    }
  };
  return (
    <form action="submit" className={styles.form}>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={`${styles.form__input} ${styles[theme]}`}
      />
      <button className={styles.form__btn} onClick={submitTask}></button>
    </form>
  );
}

export default Input;

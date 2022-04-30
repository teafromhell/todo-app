/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SelectingTasks.module.scss";
import { setTask, setFilteredTask } from "../features/tasks/tasksSlice";

function SelectingTasks() {
  const { count, tasks, filteredTasks } = useSelector(
    (state) => state.tasksRedux
  );
  const { theme } = useSelector((state) => state.theme);
  const [select, setSelect] = useState("all");
  const dispatch = useDispatch();

  useEffect(() => {
    if (select !== "active") {
      dispatch(setFilteredTask(tasks));
    }
  }, [count]);

  const selectAll = () => {
    dispatch(setFilteredTask(tasks));
    setSelect("all");
  };

  const selectActive = () => {
    dispatch(setFilteredTask(tasks.filter((item) => item.completed !== true)));
    setSelect("active");
    console.log(filteredTasks);
  };
  const selectCompleted = () => {
    dispatch(setFilteredTask(tasks.filter((item) => item.completed === true)));
    setSelect("completed");
    console.log(filteredTasks);
  };
  const clearCompleted = () => {
    dispatch(setTask(tasks.filter((item) => item.completed !== true)));
    dispatch(setFilteredTask(tasks.filter((item) => item.completed !== true)));
  };

  return (
    <ul className={`${styles.selector_block} ${styles[theme]}`}>
      <li> {count} items left</li>
      <li className={select === "all" ? styles.active : ""} onClick={selectAll}>
        All
      </li>
      <li
        className={select === "active" ? styles.active  : ""}
        onClick={selectActive}
      >
        Active
      </li>
      <li
        className={select === "completed" ? styles.active  : ""}
        onClick={selectCompleted}
      >
        Completed
      </li>
      <li onClick={clearCompleted}>Clear Completed</li>
    </ul>
  );
}

export default SelectingTasks;

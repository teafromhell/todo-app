import React, { useEffect, useState } from "react";
import styles from "./Task.module.scss";

import cross from "../assets/icon-cross.svg";
import check from "../assets/icon-check.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setCount,
  setTask,
  setFilteredTask,
} from "../features/tasks/tasksSlice";

function Task({ text, task, completed }) {
  const { theme } = useSelector((state) => state.theme);
  const [activeCheck, setActiveCheck] = useState(false);
  const dispatch = useDispatch();
  const { count, tasks, filteredTasks } = useSelector(
    (state) => state.tasksRedux
  );

  useEffect(() => {
    tasks.forEach((item) => {
      if (item.id === task.id && item.completed === true) {
        setActiveCheck(true);
      }
    });
  });
  const handleDelete = () => {
    dispatch(
      setFilteredTask(filteredTasks.filter((item) => item.id !== task.id))
    );
    dispatch(setTask(tasks.filter((item) => item.id !== task.id)));
    tasks.forEach((item) => {
      if (item.id === task.id && item.completed !== true) {
        dispatch(setCount(count - 1));
      }
    });
  };

  const handleComplete = () => {
    dispatch(
      setTask(
        tasks.map((item) => {
          if (item.id === task.id) {
            return { ...item, completed: !item.completed };
          }

          return item;
        })
      )
    );

    tasks.forEach((item) => {
      if (item.id === task.id && item.completed === true) {
        dispatch(setCount(count + 1));
      } else if (item.id === task.id && item.completed !== true) {
        dispatch(setCount(count - 1));
      }
    });
    setActiveCheck(!activeCheck);
    dispatch(
      setFilteredTask(
        filteredTasks.map((item) => {
          if (item.id === task.id) {
            return { ...item, completed: !item.completed };
          }
          return item;
        })
      )
    );
  };
  return (
    <div className={styles[theme]}>
      <div className={`${styles.single_task}`}>
        <div className={styles.check_text}>
          <div className={`${styles.check_outline} ${activeCheck ? styles.check_outline__active : ""}`}>
            <img
              onClick={handleComplete}
              className={`${styles.check_img} ${activeCheck ? styles.check_img__active : ""}`}
              src={check}
              alt="check"
            />
          </div>
          <p className={`${completed ? styles.done : ""}`}>{text}</p>
        </div>
        <div>
          <img
            onClick={handleDelete}
            className={styles.cross_img}
            src={cross}
            alt="cross"
          />
        </div>
      </div>
    </div>
  );
}

export default Task;

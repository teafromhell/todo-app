import React from "react";
import "./Task.scss";

import cross from "../assets/icon-cross.svg";
import check from "../assets/icon-check.svg";

function Task({ setTask, tasks, text, task, completed, filteredTasks, setFilteredTask }) {
  const handleDelete = () => {
    setFilteredTask(filteredTasks.filter((item) => item.id !== task.id));
    setTask(tasks.filter((item) => item.id !== task.id));
    
  };

  const handleComplete = () => {
    setTask(
        tasks.map((item) => {
        if (item.id === task.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
    setFilteredTask(
        filteredTasks.map((item) => {
        if (item.id === task.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <>
      <div className="single-task">
        <div className="check-text">
          <div>
            <img
              onClick={handleComplete}
              className="check-img"
              src={check}
              alt="check"
            />
          </div>
          <p className={`${completed ? "done" : ""}`}>{text}</p>
        </div>
        <div>
          <img
            onClick={handleDelete}
            className="cross-img"
            src={cross}
            alt="cross"
          />
        </div>
      </div>
    </>
  );
}

export default Task;

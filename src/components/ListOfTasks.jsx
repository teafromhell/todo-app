import React from "react";
import { useSelector } from "react-redux";
import "./ListOfTasks.scss";
import SelectingTasks from "./SelectingTasks";

import Task from "./Task";

function ListOfTasks() {
  const { tasks, filteredTasks } = useSelector((state) => state.tasksRedux);
  return (
    <>
      {filteredTasks.map((item) => {
        return (
          <Task
            
            task={item}
            key={item.id}
            text={item.text}
            completed={item.completed}
          />
        );
      })}
      {tasks.length > 0 && <SelectingTasks />}
    </>
  );
}

export default ListOfTasks;

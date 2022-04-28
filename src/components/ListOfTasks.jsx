import React from "react";
import "./ListOfTasks.scss";
import SelectingTasks from "./SelectingTasks";

import Task from "./Task";

function ListOfTasks({ tasks, setTask, setFilteredTask, filteredTasks }) {
    
  return (
    <>
      {filteredTasks.map((item) => {
          
          
        return (
            
          <Task
          setTask={setTask}
          tasks={tasks}
          setFilteredTask={setFilteredTask}
            task={item}
            key={item.id}
            text={item.text}
            completed={item.completed}
            filteredTasks={filteredTasks}
          />
        );
      })}
       {tasks.length > 0 && <SelectingTasks tasks={tasks} filteredTasks={filteredTasks} setFilteredTask={setFilteredTask} />}
    </>
  );
}

export default ListOfTasks;

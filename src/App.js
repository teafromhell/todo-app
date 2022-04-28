import "./App.scss";
//import background from "./assets/bg-desktop-light.jpg";
import Input from "./components/Input";
import ListOfTasks from "./components/ListOfTasks";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTask] = useState([]);
  const [filteredTasks, setFilteredTask] = useState([]);

  useEffect(()=>{
    setFilteredTask(tasks)
  }, [tasks])
  
  //console.log(filteredTasks)

 
  return (
    <div className="app">
      <header>
        {/* <div>
          <img src={background} alt="background" />          
        </div> */}
        <div className="header-input">
          <b className="header-title">T O D O</b>
          <Input tasks={tasks} setTask={setTask} />
        </div>
      </header>
      <main className="tasks-wrapper">
        <ListOfTasks
          setTask={setTask}
          tasks={tasks}
          filteredTasks={filteredTasks}
          setFilteredTask={setFilteredTask}
        />
      </main>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.scss';

function App() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([])
  const addTask = (e)=>{
    e.preventDefault()
    setTasks([...tasks, {
      id: Math.random()*1000,
      text: input,
      complete: false,
    }])
    setInput('')
  }
  return (
    <main className="App">
      <head>
        <form action="">
        <input type="text" placeholder='Write something here' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={addTask}>Add Task</button>
        </form>
      </head>
      <body>
        {tasks.map((task)=>{
          return (
            <li>{task.text}</li>
          )
        })}
      </body>
      <footer>
      y
      </footer>
    </main>
  );
}

export default App;

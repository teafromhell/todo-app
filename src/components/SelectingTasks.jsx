import React, { useState } from 'react'
//import Task from './Task'
//import Task from './Task'

function SelectingTasks({tasks ,setTask, filteredTasks, setFilteredTask }) {
    //const [completedTasks, setCompletedTasks] = useState([])
    var heroes = [
        {name: "Batman", franchise: 'DC'},
        {name: 'Ironman', franchise: 'Marvel'},
        {name: 'Thor', franchise: 'Marvel'},
        {name: 'Superman', franchise: 'DC'}
    ];

    const selectAll=()=>{
        setFilteredTask(tasks)
    }

    const selectActive=()=>{
        
        
        var marvelHeroes = heroes.filter(function(hero) {
            return hero.franchise === 'Marvel';
        });
        console.log(marvelHeroes)
        console.log(tasks)
        var l = tasks.filter(function(item) {
            return item.completed === true})

        console.log(l)
        
    }
    const selectCompleted=()=>{

        setFilteredTask(
            filteredTasks.filter((item)=> item.completed === true)
            
        )
        console.log(filteredTasks)
       

        
        // setCompletedTasks(
        //     tasks.filter((item)=> item.completed === true)
        //             .map((item)=> {
        //                 console.log(item)
        //                 return (
        //                     <Task setTask={setCompletedTasks}
        //                     task={item}
        //                     key={item.id}
        //                     text={item.text}
        //                     completed={item.completed}
        //                     tasks={completedTasks}/>
        //                 )
        //             })
        // )
    }
    const clearCompleted=()=>{
        
    }
  return (
    <div>
        <span></span>
        <span onClick={selectAll}>All</span>
        <span onClick={selectActive}>Active</span>
        <span onClick={selectCompleted}>Completed</span>
        <span onClick={clearCompleted}>Clear Completed</span>
    </div>
  )
}

export default SelectingTasks
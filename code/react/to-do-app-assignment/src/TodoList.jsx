import React from "react"
import { useState } from "react"
import './TodoList.css'



function TodoList(){

    const [tasks,SetTasks ]=useState([
        { id: 1, task: "make dinner", completed: true },
    { id: 2, task: "wash the dishes", completed: false },
    { id: 3, task: "finish homework", completed: false },
    ])

    const [newTask, setNewTask]=useState("")

    function handleAddTasks(){

            if (newTask.trim()) {
                SetTasks([...tasks, { id: Date.now(), task: newTask, completed: false }])
                setNewTask("")
            }      
    }
    

    function toogleComplete(id){
        SetTasks(tasks.map(task => task.id == id ? {...task, completed: !task.completed}: task))
    }

    return(
    <>
     <div className="todo-container">

         <h1>My To-do App</h1>
        <input type="text" 
        placeholder="Enter tasks..." 
        value={newTask}
        onChange={(e)=> setNewTask(e.target.value)}
        />
        <button 
        onClick={handleAddTasks}
        >Add</button>


        <div>
            <ul>

                {tasks.map((task) => (
                <li key={task.id} 
                onClick={()=> toogleComplete(task.id)}
                className={task.completed ? 'completed' : ''}
                >
                    {task.task}
                </li>
                ))}
            </ul>
        </div>

     </div>
    </>)
}

export default TodoList
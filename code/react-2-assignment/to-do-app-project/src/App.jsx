import { useState } from 'react'

import InputTodos from './InputTodos/InputTodos'
import DisplayTodoList from './DisplayTodos/DisplayTodos'

import './InputTodos/InputTodos.css'
import './App.css'
import './DisplayTodos/DisplayTodos.css'


function App() {
  // Data Structure for my development
  // const tasks = [
  //   { id: 1, task: "make dinner", completed: true },
  //   { id: 2, task: "wash the dishes", completed: false },
  //   { id: 3, task: "finish homework", completed: false },
  // ]
  const [task, setTask] = useState([])

  {console.log(task)} //REMOVE THIS LINE WHEN DONE

  return (
    <>
    <div className='body'>

    <InputTodos 
    task={task}
    setTask={setTask}
    />    

    <DisplayTodoList 
    toDoList={task}
    setToDoList={setTask}

    />

    </div>
    </>
  )
}

export default App

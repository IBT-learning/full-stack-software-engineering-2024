import { useState } from 'react'
import './App.css'
import InputField from './InputField'
import Display from './Display'

function App() {
  const tasks = [
    { id: 1, task: "make dinner", completed: true },
    { id: 2, task: "wash the dishes", completed: false },
    { id: 3, task: "finish homework", completed: false },
  ] 
  const [todo, setTodo] = useState([])
  const [done, setDone] = useState(false)
  const [task, setTask] = useState("")
  const [date, setDate] = useState("")
  const [editing, setEditing] = useState(null)
  return (
    <>
    <div className='wrapper'>
      <InputField 
        setTodo={setTodo}
        todo={todo}
        done={done}
        task={task}
        setTask={setTask}
        date={date}
        setDate={setDate}
        editing={editing}
        setEditing={setEditing}
        />
      {/* Debug: Display the todo list */}
      {/* <ul>
        {todo.map((task) => (
          <li key={task.id}>
            Task: {task.task}, Date: {task.date}, Done: {task.done.toString()}
          </li>
        ))}
      </ul>
       */}
      <Display
        setDone={setDone}
        todo={todo}
        setTodo={setTodo}
        done={done}
        setTask={setTask}
        setDate={setDate}
        setEditing={setEditing}
        />
    </div>
    </>
  )
}

export default App

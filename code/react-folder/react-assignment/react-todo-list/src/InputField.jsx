import { useState } from "react";

function InputField({setTodo, todo, setTask, setDate, setEditing, task, date, editing, done}) {
  const [id, setId] = useState(1)
  // const [task, setTask] = useState("")
  // const [date, setDate] = useState("")
  // const [editing, setEditing] = useState(null)

  const addOrEditTask = () => {
    if (editing !== null ) {
      setTodo(todo.map((item) => 
        item.id === editing ? {...item, task, date} : item))
    } else {
      const newId = todo.length == 0 ? 1 : todo[todo.length - 1].id + 1

      const Newtodos = {id: newId, task, date, done: false}
      setTodo([...todo, Newtodos])
      // setTodo((prevTodo) => [...prevTodo, Newtodos])
    }

    setTask("")
    setDate("")
    setEditing(null)
  }
  

  const submitEnabled = task.trim().length > 0 && date.trim().length > 0

  return (
    <>
      <div className="form">
        <h1>Streamline Your Work with Our <span>Task Manager</span> Website</h1>
        <h2>Create and Organize Tasks</h2>
        <h3><span>Prioritize and Track Progress</span></h3>
        <p>We believe that productivity and organization are key to success</p>
          <label htmlFor="text">TODO</label>
          <input
            type="text"
            id="text"
            placeholder="type here..."
            onChange={(e) => setTask(e.target.value)}
            value={task} />

          <label htmlFor="date">DATE</label>
          <input
            type="date"
            id="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}/>

          <button  disabled={!submitEnabled} onClick={addOrEditTask} >{editing ?'SAVE CHANGES' : 'ADD TASK'}</button>
      </div>


    </>
  )
}

export default InputField
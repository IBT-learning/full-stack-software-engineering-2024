import { useState } from 'react'


function InputTodos({ task, setTask }) {
    const [todos, setTodos] = useState("")
    const handleChangeEvent = (e) => {
      setTodos(e.target.value)
    }
    const [toDoId, setToDoId] = useState(0)


    const handleSubmit = () => {
      const newId = toDoId + 1
      setToDoId(newId)
      const newToDo = {
        id: newId,
        task: todos.trim(),
        completed: false
      }
      setTask([...task, newToDo])    
      setTodos("")
    }

    return (
    <>
      <div className='input-todos'>
        <h2 className='title'>TO-DO LIST APP</h2>
        
        <input className='input-field'
        id={todos}
        type="text"
        name="todo"
        value={todos}  //the input value matches the state variable
        placeholder="fill out your todos here..."
        onChange={handleChangeEvent}
        onKeyDown={(e) => {
          if (e.key === "Enter" && todos.trim() !== "") {
            handleSubmit()
          }
        }}
        />
        
        {/* when disabled apply class white else apply class red */}
        <div className = {'submit-btn ' + (todos.trim() === "" ? 'submit-disabled' : 'submit-enabled')}
        >
          <button className='submit-todo'
          onClick={handleSubmit} 
          disabled={todos.trim() === ""}>
            Submit
          </button>
        </div>
        
        </div>
      </>
    )
  }
  
  export default InputTodos

  // TODO: handle the submit to not just be disabled but 
  // to completely not show when the input field is empty
  // make app responsive
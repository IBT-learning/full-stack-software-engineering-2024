

function DisplayTodoList({ toDoList, setToDoList}) {
  
  // prevState is provided internally by React
  // when you pass a function to the state setter to do sth
  // instead of passing a value directly to the setter
  // it is the current state of my toDoList
  // it is referred to as so because it represents 
  // the prev state/ rather the current state of my todolist
  // before the setter updates the todolist state
  // prev state is thus the current state of my todolist
  // and todolist will now be updated based on that prev state 

  const toggleComplete = (id) => {
    setToDoList((prevState) => 
      prevState.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    )
  }
  
  
  if (toDoList.length > 0) {
    return (
      <>
  <div className='todo-list'>
    <h3 className='todos-title'>My To-Do List</h3>
    
    <div className='mytodos-box'>
      {toDoList.map((t) => {
        return (
          <ol 
          key = {t.id}className='mytodos-container'>
            <li className='my-todos'>
              <span className={`'todo' ${t.completed && 'completed'}` }>
                {t.task}
              </span>
              <div className='btn-container'>
                <button className='complete-btn'
                onClick={() => {
                  toggleComplete(t.id)
                }}>
                  {t.completed ? "Completed" : "To Complete"}
                  {/* TODO: how to delete a completed todo entirely
                  IDEA: use settimeout to first display the completed todo
                  before the todo disappears*/}
                </button>
              </div>
              
              </li>
            </ol>
          )
        })}

    </div>
    
  </div>
  </>
    )
  }
}
  
  export default DisplayTodoList

  


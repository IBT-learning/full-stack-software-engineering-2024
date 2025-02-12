import { useState } from 'react';
import './ToDo.css';

const initialTasks = [
  { id: 1, task: "Make dinner", completed: true },
  { id: 2, task: "Wash the dishes", completed: false },
  { id: 3, task: "Finish homework", completed: false },
];

function ToDo() {
  const [tasks, setTasks] = useState(initialTasks);
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    const newTask = {
      id: tasks.length + 1,
      task: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const handleToggleCompleted = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };


  return (
    <>
      <h1>ToDo List</h1>
      <form key={task.id} onSubmit={handleSubmit}>
        <div className="todo-container">
          <input 
            type="text" 
            placeholder="Enter a task here" 
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </div>
      </form>

      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.task}
            <input 
              type="checkbox" 
              checked={task.completed}
              onChange={() => handleToggleCompleted(task.id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDo;




















import React, { useState } from 'react';

const TodoComponent = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'make dinner', completed: true },
    { id: 2, task: 'wash the dishes', completed: false },
    { id: 3, task: 'finish homework', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = {
        id: tasks.length + 1,
        task: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => handleToggleComplete(task.id)}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {task.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;

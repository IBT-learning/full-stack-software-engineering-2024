import React from 'react';

const ToDoItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(task.id)}>{task.task}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default ToDoItem;

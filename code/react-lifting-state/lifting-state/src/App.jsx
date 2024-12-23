import React, { useState } from "react";
import TaskList from "./TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "make dinner", completed: true },
    { id: 2, task: "wash the dishes", completed: false },
    { id: 3, task: "finish homework", completed: false },
    { id: 4, task: "read a book", completed: false },
    { id: 5, task: "exercise for 30 minutes", completed: true },
    { id: 6, task: "call a friend", completed: false },
    { id: 7, task: "clean the living room", completed: false },
    { id: 8, task: "buy groceries", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, task: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} />
    </div>
  );
};

export default App;

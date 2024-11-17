import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ContentList from './components/ContentList';
import AddContent from './components/AddContent';
import Footer from './components/Footer';

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  )
  const [newTask, setNewTask] = useState("");
  const taskLength = tasks.length

  const saveAndgetFromLocalStorage = (taskList) => {
    setTasks(taskList);
    localStorage.setItem("todoList", JSON.stringify(taskList));
  }

  const addNewTask = (task) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1
    const myNewTask = { id, task, completed: false };
    const taskList = [...tasks, myNewTask];
    saveAndgetFromLocalStorage(taskList);
  }

  const handleCheck = (id) => {
    const taskList = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : { ...task }
    );
    saveAndgetFromLocalStorage(taskList);
  }

  const handleDelete = (id) => {
    const taskList = tasks.filter((task) => task.id !== id);
    saveAndgetFromLocalStorage(taskList);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      addNewTask(newTask);
      setNewTask("");
    } else {
      return null;
    }
  }

  return (
    <div className='wrapper'>
      <Header
        taskLength={taskLength} />

      <AddContent
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit} />

      <ContentList
        tasks={tasks}
        handleCheck={handleCheck}
        handleDelete={handleDelete} />
      <Footer />
    </div>
  )
}

export default App

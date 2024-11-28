import React, {useState} from 'react';
import '../App.css';

function ToDoApp(){
    //initial tasks
    const [tasks, setTasks] = useState([
        { id: 1, task: "Wash the dishes", category: "Not Started" },
        { id: 2, task: "Reply to Emails", category: "In Progress" },
        { id: 3, task: "Send Monthly Documents", category: "Done" }
    ]);
    const [input, setInput] = useState('');
    const [category, setCategory] = useState('Not Started');

    //function to add tasks
    const addTask = () =>{
        if (input.trim() !== '') {
            setTasks([...tasks, { id: tasks.length + 1, task: input, category }]);
            setInput('');
            setCategory('Not Started');
        }
    };

    //function to update categories
    const updateCategory = (id, newCategory) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, category: newCategory } : task));
    };
    
    return (
        <div className="todo-app">
            <div className="head-section">
                <h2>Create New Task</h2>
                <input
                    type="text"
                    placeholder="Type here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
                <button className="addtask-btn" onClick={addTask}>Add Task</button>
            </div>

            <div className="categories">
                <TaskCategory
                    title="Not Started"
                    tasks={tasks.filter(task => task.category === 'Not Started')}
                    updateCategory={updateCategory}
                />
                <TaskCategory
                    title="In Progress"
                    tasks={tasks.filter(task => task.category === 'In Progress')}
                    updateCategory={updateCategory}
                />
                <TaskCategory
                    title="Done"
                    tasks={tasks.filter(task => task.category === 'Done')}
                    updateCategory={updateCategory}
                />
            </div>
        </div>
    );
}

function TaskCategory({ title, tasks, updateCategory }) {
    return (
        <div className={`${title.toLowerCase().replace(' ', '-')}`}>
            <h2>{title}</h2>
            {tasks.map(task => (
                <div key={task.id} className="task-item">
                    <span>{task.task}</span>
                    <select
                        value={task.category}
                        onChange={(e) => updateCategory(task.id, e.target.value)}
                    >
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
            ))}
        </div>
    );
}

export default ToDoApp;
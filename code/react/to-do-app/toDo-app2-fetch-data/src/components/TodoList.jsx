import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ToDoList({ userId, newTodo, onNewTodoChange, onNewTodoSubmit }) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
            const output = await res.json();
            setTodos(output);
        };

        getData();
    }, [userId]);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim() === '') return;

        const newTodoItem = {
            id: Date.now(), // Generate a unique ID
            title: newTodo,
            completed: false,
        };
        setTodos([...todos, newTodoItem]);
        onNewTodoSubmit();
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleToggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleReset = () => {
        setTodos([]);
    };

    return (
        <>
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={onNewTodoChange}
                    placeholder="Add a new task"
                    style={{borderRadius: '10px'}}
                />
                <button className='add-btn' type="submit">Add</button>
            </form>

            <ul style={{ listStyle: "disc"}}>
                {todos.map((item) => (
                    <li key={item.id} className="list">
                        <span
                            style={{
                                textDecoration: item.completed ? 'line-through' : 'none',
                                color: item.completed ? 'red' : 'black',
                            }}
                        >
                            {item.title}
                        </span>
                        <input
                            type="checkbox"
                            style={{ marginLeft: '10%' }}
                            checked={item.completed}
                            onChange={() => handleToggleComplete(item.id)}
                            className='chkbx'
                        />
                        <button
                            onClick={() => handleDeleteTodo(item.id)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>

            <button id='reset' onClick={handleReset}>Reset</button>
        </>
    );
}

ToDoList.propTypes = {
    userId: PropTypes.number.isRequired,
    newTodo: PropTypes.string.isRequired,
    onNewTodoChange: PropTypes.func.isRequired,
    onNewTodoSubmit: PropTypes.func.isRequired,
};

export default ToDoList;




/**
 * React Assignment #2: To-do app
We are going to make a simple to-do list using react! This can look very similar to the to-do app you wrote using Web APIs. Feel free to revisit that assignment to reuse some of the HTML and CSS. However, this one will be significantly more complex. Rather than just loading elements from a static remote resource, we'll have a text input field we will use to add elements to the list.

Create a React Project
Revisit the instructions from the previous assignment for a reminder on how to start a new React project.

Write a to-do list
I'm not going to give you a lot of details on how to implement this app, part of the challenge will be to design the solution yourself.

Requirements:
there is an input field on the page
when I submit a value from the input field, it will be added to the to-do list
there is a way to mark an item as "completed"
when I mark an item as completed, the display will change
Test data:
You'll probably want to start with some beginning data to work with while you develop. You will always be able to take this out later. I suggest this data structure, but feel free to adjust it as your app calls for.

- Data was fetched, instead of the below.

Extra challenges (optional)
You can mark an item as completed, but can you undo that action? If your current solution doesn't allow this, try to come up with one that does.

In addition to a way to mark an item as complete, can we delete an item from the list entirely?
 */
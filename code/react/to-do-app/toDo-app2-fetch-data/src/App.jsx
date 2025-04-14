import { useState } from 'react';
import ToDoList from './components/TodoList';

function App() {
    const [userId, setUserId] = useState(1);
    const [newTodo, setNewTodo] = useState('');

    const handleUserIdChange = (e) => {
        setUserId(Number(e.target.value));
    };

    const handleNewTodoChange = (e) => {
        setNewTodo(e.target.value);
    };

    return (
        <div>
            <h3 id="todo">To Do App</h3>
            <div className='num'>
                <span>Select userId:</span>
                <input type="number" min="1" max="10" value={userId}
                    onChange={handleUserIdChange}
                />
            </div>
            <ToDoList userId={userId} 
            newTodo={newTodo} 
            onNewTodoChange={handleNewTodoChange}
            onNewTodoSubmit={() => setNewTodo('')}
            />
        </div>
    );
}

export default App;


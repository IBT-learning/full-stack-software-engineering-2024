import { useRef } from 'react';
import "./AddContent.css";

function AddContent({ newTask, setNewTask, handleSubmit }) {

    const inputRef = useRef();

    return (
        <form className="add-container" onSubmit={handleSubmit}>
            <label htmlFor="addTodo">
                <input
                    type="text"
                    ref={inputRef}
                    id="addTodo"
                    placeholder="Type here..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
            </label>
            <button
                type="submit"
                aria-label="Add-Todo"
                onClick={() => inputRef.current.focus()}
            >Add</button>
        </form>
    )
}

export default AddContent
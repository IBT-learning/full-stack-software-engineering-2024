import "./ContentList.css"

function ContentList({ tasks, handleCheck, handleDelete }) {

    return (
        <main>
            {tasks.length ? (
                tasks.map((task) => (
                    <div className="content-list"
                        style={task.completed ? { background: "#121d10" } : null} key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleCheck(task.id)}
                        />
                        <label
                            style={(task.completed) ? {
                                textDecoration: "line-through",
                                color: "#ffff",
                            } : null}
                            className="custom-checkbox"
                        >
                            {(task.task).length >= 50 ? `${(task.task).slice(0, 50)}...` : task.task}
                        </label>
                        <button
                            onClick={() => handleDelete(task.id)}
                            style={task.completed ? { background: "#eb2f0e" } : null}
                        >Delete</button>
                    </div>
                ))
            ) : (
                <p style={{ textAlign: "center" }}>Todo List is Empty</p>
            )
            }
        </main>
    )
}

export default ContentList
function Display({setDone, todo, setTodo, setTask, setDate, setEditing, done}) {
    const Heads = ["index","Task","Date","Status", "Action"]
    const Delete = (item) => {
        const updatedTask = todo.filter((items) => items.id !== item.id);
        const reIndex = updatedTask.map((items, index) => ({
            ...items,
            id: index+1
        }))
        setTodo(reIndex)
    }

    const editTask = (item) => {
        setTask(item.task)
        setDate(item.date)
        setEditing(item.id)
        setDone(item.done)
      }

    const complete = (item) => {
        setTodo((prevTodo) =>
            prevTodo.map((t) =>
                t.id === item.id ? { ...t, done: !t.done } : t
            )
        );
    };

    const theclass = (item) => item.done ? "done" : "undone";

    const handleEdit = (item) => item.done

    return (
        <>
        <div>
            <h2 className="todo">Todo List</h2>
            <table className="table">
                <thead className="thead">
                    <tr>
                        {Heads.map((item, index) => 
                        <th key={index}>{item}</th>)}
                    </tr>
                </thead>
                <tbody className="tbody">
                    {todo.map((item, index) =>
                    <>
                        <tr key={item.id} className={theclass(item)}>
                            <td >{item.id}</td>
                            <td >{item.task}</td>
                            <td >{item.date}</td>
                            <td className="td">
                                <button onClick={() => complete(item)}>{item.done ? "Done" : "UnDone"}</button>
                            </td>
                            <td className="action">
                                <button disabled={handleEdit(item)} onClick={() => editTask(item)} className="edit">Edit</button>
                                <button onClick={() => Delete(item)} className="delete">Delete</button>
                            </td>
                        </tr>
                   </>
                )}
                </tbody>
            </table>
        </div>
        
        </>
    )
}

export default Display;
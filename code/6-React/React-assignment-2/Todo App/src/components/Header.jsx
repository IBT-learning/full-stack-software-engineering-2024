import "./Header.css"

function Header({ taskLength }) {
    console.log(taskLength <= 1 ? "task" : "tasks");

    return (
        <header className="header">
            <h1>TODO APP</h1>
            <h5>You have
                {` (${taskLength})`} {taskLength <= 1 ? " Task " : " Tasks "}
                on your List</h5>
        </header>
    )
}

export default Header
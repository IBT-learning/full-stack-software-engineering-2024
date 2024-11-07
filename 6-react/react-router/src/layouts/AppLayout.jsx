import { NavLink, Outlet } from "react-router-dom"

function AppLayout() {
  return (
    <div className="app-layout">
      <header>
        <h1>Class Library</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="books">Books</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout

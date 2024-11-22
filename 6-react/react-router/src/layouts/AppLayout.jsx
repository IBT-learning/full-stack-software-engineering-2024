import { NavLink, Outlet } from "react-router-dom"

function AppLayout() {
  return (
    <div className="app-layout">
      <header>
        <h1>Class Library</h1>
        {/* A Link are special anchor tags that set up urls based on the React Router's routes
            A NavLink is just like a Link, but it also has an "active" class
              whenever we are on the specified route        */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="books">Books</NavLink>
      </header>
      <main>
        {/* The Outlet is where the elements for all of the nested routes are applied
        The presence of an Outlet is what makes this a "layout" and not just a regular component        */}
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout

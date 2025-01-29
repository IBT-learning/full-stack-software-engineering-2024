import { NavLink, Outlet } from "react-router-dom"

function ParentLayout() {
  return (
    <>
      <div className="page-wrapper">
        <header className="header">
          <div className="blog-title">
            <h1>4C</h1>
            <h5>... NATURAL SISTERS ...</h5>
          </div>

          <div className="links">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="posts">POSTS</NavLink>
            <NavLink to="membership">MEMBERSHIP</NavLink>
            <NavLink to="profile">PROFILE</NavLink>
          </div>
        </header>

        <main>
          <Outlet />
        </main>

        <footer className="footer">
          Copyright&copy 2025. 4C Natural Hair Blog App. All rights reserved.
        </footer>
      </div>
    </>
  )
}

export default ParentLayout

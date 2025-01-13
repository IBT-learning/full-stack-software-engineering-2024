import { NavLink, Outlet } from "react-router-dom"

function AboutLayout() {
  // This is a nested layout
  // It is included as a child of AppLayout, so it will load in the "Outlet" of AppLayout
  // And the nested routes here (in this case About, FAQ, and Staff)
  //    will be rendered inside this Outlet
  return (
    <div id="about-wrapper">
      <nav id="about-nav">
        <NavLink to="." end>
          About
        </NavLink>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="staff">Our Staff</NavLink>
      </nav>
      <article>
        <Outlet />
      </article>
    </div>
  )
}

export default AboutLayout

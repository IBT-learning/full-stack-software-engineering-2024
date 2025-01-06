import { NavLink, Outlet, useParams } from "react-router-dom";

function ParentLayout() {
const { recipeId } = useParams()

  return (
    <>
      <div className="page-wrapper">
        <header className="header">
          <h1 className="title">RECIPES APP</h1>

          <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to={`recipe/${recipeId}`}>Recipe</NavLink>
            <NavLink to="create">Create</NavLink>
            <NavLink to={`/edit/recipes/${recipeId}`}>Edit</NavLink>
          </div>
        </header>

        <main>
          {/* the outlet displays what is in the components */}
          <Outlet />
        </main>

        <footer className="footer">
          Copyright&copy; 2024. Matilda Recipe App. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default ParentLayout;

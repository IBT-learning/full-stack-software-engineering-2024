import { NavLink, Outlet } from "react-router-dom";
function NavLinks () {
    return (
        <>
            <div>
                <header className='header'>
                    <h1>Easy Recipe</h1>
                    <div className="header-link">
                    <NavLink to="/">Home</NavLink>
                    {/* <NavLink to="recipe">Recipe</NavLink> */}
                    <NavLink to="create">Create</NavLink>
                    {/* <NavLink to="edit">Edit</NavLink> */}
                    </div>
                    
                </header>
                <Outlet /> {/*Outlet is a placeholder for the child routes*/}
            </div>
        </>
    )
}

export default NavLinks;
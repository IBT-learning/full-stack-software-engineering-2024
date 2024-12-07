import { NavLink, Outlet } from "react-router-dom";
import "./AppLayout.css"
function AppLayout (){
    return (
        <div>
            <header>
                <h2>Recipe</h2>
                
        <NavLink to="/">Home</NavLink>
        <NavLink to="create">Create Recipe</NavLink>
        <NavLink to="update/:id"></NavLink>
        

                </header>
            <Outlet/>

        </div>
    )}

export default AppLayout
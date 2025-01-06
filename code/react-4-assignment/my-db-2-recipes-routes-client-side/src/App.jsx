import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css";

import ParentLayout from "./layouts/ParentLayout";

import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<ParentLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="recipe/:recipeId" element={<Recipe />}></Route>
        <Route path="create" element={<Create />}></Route>
        <Route path="/edit/recipes/:recipeId/" element={<Edit />}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

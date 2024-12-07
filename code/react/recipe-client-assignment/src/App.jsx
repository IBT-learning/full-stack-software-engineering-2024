import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import Create from './pages/Create'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import AppLayout from './AppLayout'
import RecipeDetail from './pages/RecipeDetail'
import EditRecipe from './pages/EditRecipe'
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="recipe/:id" element={<RecipeDetail />} />
      {/* <Route path="recipe" element={<Recipe />} /> */}
      <Route path="create" element={<Create />} />
      <Route path="update/:id" element={<EditRecipe />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App

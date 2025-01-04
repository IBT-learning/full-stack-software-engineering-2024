import { useState, useEffect } from 'react'
import { createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';

import HomePage from './Pages/Home.jsx'
import Recipe from './Pages/Recipe.jsx'
import AddRecipe from './Pages/CreateRecipe.jsx';
import EditRecipe from './Pages/EditRecipe.jsx';

import NavLayout from './Layouts/NavLayout.jsx'
import './App.css'
const queryClient = new QueryClient(); // Create a QueryClient instance

function App() {
  const [recipes, setRecipes] = useState([]);

  const routes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<NavLayout />} >
      < Route path="/" element={< HomePage recipes={recipes} setRecipes={setRecipes}/>} />
      < Route path="/recipe/:id" element={< Recipe />} />
      < Route path="/create" element={< AddRecipe />} />
      < Route path="/edit/:id" element={< EditRecipe />} />
    </Route>
  ))

  return (
    <div className='wrapper'>
    <QueryClientProvider client={queryClient}>
      < RouterProvider router={routes} />
    </QueryClientProvider>
    </div>
  )
}

export default App

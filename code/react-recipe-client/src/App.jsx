import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CreateRecipe from './pages/CreateRecipe';
import RecipePage from './pages/RecipePage';
import EditPage from './pages/EditPage';
import DetailPage from './pages/DetailPage';


const App = () => {
  // State to hold all recipes
  const [recipes, setRecipes] = useState([]);

  // Function to add a new recipe
  const addRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  // Function to update a recipe (used for editing)
  const updateRecipe = (updatedRecipe) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );
  };

  // Function to delete a recipe
  const deleteRecipe = (id) => {
    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home recipes={recipes} />} />
          <Route path="recipe/:id" element={< DetailPage />} />
          <Route
            path="create"
            element={<CreateRecipe addRecipe={addRecipe} />}
          />
          <Route
            path="recipe/:id"
            element={
              <RecipePage
                recipes={recipes}
                deleteRecipe={deleteRecipe}
              />
            }
          />
          <Route
            path="recipes/:id/edit"
            element={
              <EditPage
                recipes={recipes}
                updateRecipe={updateRecipe}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchRecipes } from '../api';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes().then(data => setRecipes(data));
  }, []);

  return (
    <div>
      <h2>All Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/create">Add New Recipe</Link>
    </div>
  );
}

export default HomePage;

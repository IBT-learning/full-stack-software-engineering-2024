import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => (
  <div>
    {recipes.map(recipe => (
      <div key={recipe.id}>
        <h3>
          <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
        </h3>
      </div>
    ))}
  </div>
);

export default RecipeList;

import React from 'react';

const RecipeDetail = ({ recipe }) => (
  <div>
    <h2>{recipe.title}</h2>
    <p>{recipe.description}</p>
    <h4>Ingredients:</h4>
    <ul>
      {recipe.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  </div>
);

export default RecipeDetail;

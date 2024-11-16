import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchRecipeById } from '../api';

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipeById(id).then(data => setRecipe(data));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <Link to={`/edit/${recipe.id}`}>Edit Recipe</Link>
    </div>
  );
}

export default RecipePage;

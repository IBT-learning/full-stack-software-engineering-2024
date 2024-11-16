import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRecipe } from '../api';

function CreateRecipePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ingredientsArray = ingredients.split(',').map(ing => ing.trim());
    await createRecipe({ title, description, ingredients: ingredientsArray });
    navigate('/');
  };

  return (
    <div>
      <h2>Create New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <input value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients (comma-separated)" />
        <button type="submit">Save Recipe</button>
      </form>
    </div>
  );
}

export default CreateRecipePage;

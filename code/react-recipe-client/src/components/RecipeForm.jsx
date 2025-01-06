import React, { useState } from 'react';

const RecipeForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [ingredients, setIngredients] = useState(initialData.ingredients?.join(', ') || '');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      ingredients: ingredients.split(',').map(item => item.trim()),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input value={title} onChange={e => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Ingredients (comma-separated):</label>
        <input value={ingredients} onChange={e => setIngredients(e.target.value)} required />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default RecipeForm;

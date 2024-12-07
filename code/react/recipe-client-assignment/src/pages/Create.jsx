import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.css'; // Make sure to create and import this CSS file

function Create() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert comma-separated ingredients to array
    const ingredientsArray = ingredients
      .split(',')
      .map(ingredient => ingredient.trim())
      .filter(ingredient => ingredient !== '');

    const newRecipe = {
      title,
      author,
      ingredients: ingredientsArray,
      instructions
    };

    try {
      const response = await fetch('http://localhost:4000/recipe/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRecipe)
      });

      if (!response.ok) {
        throw new Error('Failed to create recipe');
      }

      const createdRecipe = await response.json();
      navigate(`/recipe/${createdRecipe._id}`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="create-container">
      <h1 className="create-title">Create New Recipe</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            id="ingredients"
            placeholder="Ingredients (comma-separated)"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
            className="form-textarea"
          />
        </div>
        <div className="form-group">
          <label htmlFor="instructions">Instructions</label>
          <textarea
            id="instructions"
            placeholder="Instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
            className="form-textarea"
          />
        </div>
        <button type="submit" className="submit-btn">Create Recipe</button>
      </form>
    </div>
  );
}

export default Create;
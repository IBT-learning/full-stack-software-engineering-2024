import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./EditRecipe.css"
function Edit() {
  const { id } = useParams(); // Get the recipe ID from the URL params
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  
  // Fetch the recipe details when the component mounts
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:4000/recipe/${id}`);
        if (!response.ok) throw new Error('Failed to fetch recipe');
        
        const recipe = await response.json();
        setTitle(recipe.title);
        setAuthor(recipe.author);
        setIngredients(recipe.ingredients.join(', ')); // Convert array to comma-separated string
        setInstructions(recipe.instructions);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert comma-separated ingredients to array
    const ingredientsArray = ingredients
      .split(',')
      .map(ingredient => ingredient.trim())
      .filter(ingredient => ingredient !== '');

    const updatedRecipe = {
      title,
      author,
      ingredients: ingredientsArray,
      instructions
    };

    try {
      const response = await fetch(`http://localhost:4000/recipe/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedRecipe)
      });

      if (!response.ok) {
        throw new Error('Failed to update recipe');
      }

      // Optionally, you can navigate to the recipe details page after updating
      navigate(`/recipe/${id}`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:4000/recipe/delete/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to delete recipe');
      }

      // After deleting the recipe, navigate back to the home page
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="edit-container">
      <h1>Edit Recipe</h1>
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="instructions">Instructions</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          />
        </div>
        <div className="buttons">
          <button type="submit">Save Changes</button>
          <button type="button" onClick={handleDelete} className="delete-btn">
            Delete Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;

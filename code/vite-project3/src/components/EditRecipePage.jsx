import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchRecipeById, updateRecipe, deleteRecipe } from '../api';

function EditRecipePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');

  useEffect(() => {
    fetchRecipeById(id).then(recipe => {
      setTitle(recipe.title);
      setDescription(recipe.description);
      setIngredients(recipe.ingredients.join(', '));
    });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const ingredientsArray = ingredients.split(',').map(ing => ing.trim());
    await updateRecipe(id, { title, description, ingredients: ingredientsArray });
    navigate(`/recipe/${id}`);
  };

  const handleDelete = async () => {
    await deleteRecipe(id);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleUpdate}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        <input value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        <button type="submit">Update Recipe</button>
      </form>
      <button onClick={handleDelete}>Delete Recipe</button>
    </div>
  );
}

export default EditRecipePage;

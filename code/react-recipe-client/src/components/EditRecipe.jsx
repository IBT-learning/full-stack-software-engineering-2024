import React from 'react';
import RecipeForm from './RecipeForm';
import { useNavigate } from 'react-router-dom';

const EditRecipe = ({ recipe, onSave, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    onDelete(recipe.id);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <RecipeForm initialData={recipe} onSubmit={onSave} />
      <button onClick={handleDelete}>Delete Recipe</button>
    </div>
  );
};

export default EditRecipe;

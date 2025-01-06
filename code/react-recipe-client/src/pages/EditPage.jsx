import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditRecipe from '../components/EditRecipe';

const EditPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/recipes/${id}`)
      .then(response => response.json())
      .then(data => setRecipe(data))
      .catch(error => console.error('Fetch error:', error));
  }, [id]);

  const handleSave = updatedRecipe => {
    fetch(`http://localhost:5000/recipes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedRecipe),
    })
      .then(() => alert('Recipe updated successfully!'))
      .catch(error => console.error('Fetch error:', error));
  };

  const handleDelete = recipeId => {
    fetch(`http://localhost:27017/Recipes.Recipes}`, { method: 'DELETE' })
      .then(() => alert('Recipe deleted successfully!'))
      .catch(error => console.error('Fetch error:', error));
  };

  return recipe ? (
    <EditRecipe recipe={recipe} onSave={handleSave} onDelete={handleDelete} />
  ) : (
    <p>Loading...</p>
  );
};

export default EditPage;

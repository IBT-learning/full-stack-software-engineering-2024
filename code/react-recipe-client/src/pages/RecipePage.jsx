import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RecipeDetail from '../components/RecipeDetail';

const RecipePage = () => {
  const { id } = useParams();  // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // For navigation after deletion

  // Fetch the recipe details when the component mounts or the ID changes
  useEffect(() => {
    const fetchRecipe = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://localhost:5000/recipes/${id}`);
        if (!response.ok) {
          throw new Error('Recipe not found');
        }
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        setError(error.message);
        console.error('Fetch error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/recipes/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete recipe');
      }

      // Navigate to the home page after deletion
      navigate('/');
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return recipe ? (
    <div>
      <RecipeDetail recipe={recipe} />
      <button onClick={handleDelete}>Delete Recipe</button>
    </div>
  ) : (
    <p>Recipe not found</p>
  );
};

export default RecipePage;

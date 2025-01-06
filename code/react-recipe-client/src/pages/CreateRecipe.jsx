import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateRecipe = ({ addRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: Date.now(), // Unique ID for the recipe
      title,
      ingredients: ingredients.split(",").map((ing) => ing.trim()), // Convert to array
      instructions,
    };

    addRecipe(newRecipe); // Add the new recipe to state
    navigate("/"); // Redirect to Home page
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Ingredients (comma-separated):</label>
        <input value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
      </div>
      <div>
        <label>Instructions:</label>
        <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default CreateRecipe;

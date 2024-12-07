import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import "./RecipeDetail.css"
function RecipeDetail() {
  const [recipe , setRecipe] = useState({});
  const { id: recipeid } = useParams();
  const url = `http://localhost:4000/recipe/${recipeid}`
  const navigate = useNavigate()
// console.log(useParams());

  useEffect(()=> {

    fetch(url)
    .then((res) => res.json())
    .then((data) => setRecipe((data)))
    .catch((err) => console.error(err))

},[])

  return (
    <>
       <div id="recipe-detail">
      <h1>{recipe.title}</h1>
      <p><strong>Author:</strong> {recipe.author}</p>
      <p>
        <strong>Ingredients:</strong>{" "}
        {Array.isArray(recipe.ingredients)
          ? recipe.ingredients.join(", ")
          : recipe.ingredients}
      </p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <Link to={`/update/${recipeid}`} className="edit-btn">Edit Recipe</Link>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
    </>
  );
}

export default RecipeDetail;
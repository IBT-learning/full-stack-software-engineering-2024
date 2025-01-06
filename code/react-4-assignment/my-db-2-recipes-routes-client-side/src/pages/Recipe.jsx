import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Recipe() {
  const [singleRecipe, setSingleRecipe] = useState({ ingredients: [] });
  const { recipeId } = useParams();
  const url = `http://localhost:4000/recipes/retrieve/${recipeId}`;
  console.log(url);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleRecipe(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div className="recipe-wrapper">
        <h2 className="recipe-title">{singleRecipe.title}</h2>
        <p className="info">
          This recipe was created by:{" "}
          <span className="author">{singleRecipe.author}</span>
        </p>
        <h3 className="recipe-title">Ingredients</h3>
        <div>
          {singleRecipe.ingredients.map((ingredient) => (
            <li key={ingredient} className="ingredients">
              {ingredient}
            </li>
          ))}
        </div>
        <h3 className="recipe-title">Instructions</h3>
        <div className="instructions">{singleRecipe.instructions}</div>
      </div>
      <Link to={`/edit/recipes/${singleRecipe._id}`}>
        <div className="edit">Click here to edit this recipe</div>
      </Link>
    </>
  );
}

export default Recipe;

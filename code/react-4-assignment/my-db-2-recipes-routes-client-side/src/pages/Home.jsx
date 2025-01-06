import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/recipes")
      .then((res) => res.json())
      .then((recipes) => setAllRecipes(recipes))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="outlet">
        <h3 className="about">My Happy Place</h3>
        <p className="intro">
          Welcome to my space! I am a foodie, and I created this space for my
          fellow foodies. I enjoy trying out different recipes and I am a fun of
          healthy eating. And yes, healthy doesn't always mean boring! What
          recipes have you been trying out? You can add new recipes as often as
          you enjoy to. Let's build this space together...
        </p>
        <p className="intro">
          Click on the recipe titles to see the full recipe details...
        </p>
        <h3 className="about">Recipe Titles:</h3>
        <div className="recipe-titles">
          {allRecipes.map((recipe) => (
            <Link to={`recipe/${recipe._id}`} key={recipe._id}>
              <div className="recipe-title">{recipe.title}</div>
              <span className="author">{recipe.author}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;

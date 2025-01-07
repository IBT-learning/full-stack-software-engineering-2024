import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { recipeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/recipes/retrieve/${recipeId}`)
      .then((res) => res.json())
      .then((data) => {
        return (
          setTitle(data.title),
          setAuthor(data.author),
          setIngredients(data.ingredients.join(", ")), //converts the fetched array to string
          setInstructions(data.instructions)
        );
      })
      .catch((err) => console.error(err));
  }, [recipeId]);

  const handleSubmit = () => {
    fetch(`http://localhost:4000/recipes/update/${recipeId}`, {
      method: "PUT",
      body: JSON.stringify({ title, author, ingredients, instructions }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Couldn't edit the recipe");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setSuccessMessage(data.message);
        setErrorMessage(""); //clears any prior error message
        setTimeout(() => {
          navigate(`/recipe/${recipeId}`); //goes back to the recipe page after an update
        }, 2000);
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage("Make sure you modified");
        setSuccessMessage(""); //clears any prior success message
      });
  };

  const handleDelete = () => {
    fetch(`http://localhost:4000/recipes/delete/${recipeId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Couldn't delete the recipe");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setSuccessMessage(data.message);
        setErrorMessage(""); //clears any prior error message
        setTimeout(() => {
          navigate("/"); //goes back to the homepage after deleting
        }, 2000);
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage("Something went wrong. Please try again");
        setSuccessMessage(""); //clears any prior success message
      });
  };

  return (
    <>
      <p className="main-info">Edit this recipe...</p>
      <p className="info">
        Please check the punctuation of the existing recipes on the home page
        and follow suit, for uniformity.
      </p>
      <div className="create">
        <input
          className="one"
          type="text"
          placeholder="recipe title..."
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          className="two"
          type="text"
          placeholder="author..."
          required
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <input
          className="three"
          type="text"
          placeholder="ingredients...comma-separated"
          title="ingredients...comma-separated"
          required
          value={ingredients}
          onChange={(e) => {
            setIngredients(
              e.target.value.split(",").map((ingredient) => ingredient.trim())
            );
          }}
        />
        <textarea
          className="four"
          type="text"
          placeholder="instructions..."
          required
          value={instructions}
          onChange={(e) => {
            setInstructions(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="btn-wrapper">
        <button className="btn" onClick={handleSubmit}>
          Submit Recipe
        </button>
      </div>
      <div className="success-message">{successMessage}</div>
      <div className="error-message">{errorMessage}</div>

      <div className="btn-wrapper">
        <button className="delete-btn" onClick={handleDelete}>
          Delete Recipe
        </button>
      </div>
    </>
  );
}

export default Edit;

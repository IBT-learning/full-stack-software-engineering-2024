import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate()

  const handleSubmit = () => {
    fetch("http://localhost:4000/recipes/", {
      method: "POST",
      body: JSON.stringify({ title, author, ingredients, instructions }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Couldn't create the recipe");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setSuccessMessage(data.message);
        setErrorMessage(""); //clears any prior error message
        setTimeout(() => {
          navigate("/"); //goes back to the homepage after creating
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
      <p className="main-info">Create a new recipe...</p>
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
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          className="two"
          type="text"
          placeholder="author..."
          required
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
          onChange={(e) => {
            setIngredients(e.target.value.split(",").map((ingredient) => ingredient.trim())); //converts the string to array
          }}
        />
        <textarea
          className="four"
          type="text"
          placeholder="instructions..."
          required
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
      <div className="success-message">
        {successMessage}
      </div>
      <div className="error-message">
        {errorMessage} 
      </div>
    </>
  );
}

export default Create;

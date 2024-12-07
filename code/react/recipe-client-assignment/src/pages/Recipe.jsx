import { useState, useEffect, } from "react"
import { useParams, Link, useNavigate } from 'react-router-dom';

function Recipe (){

//     const [recipes, setRecipes] = useState([])
//     const { _id } = useParams()
//     const navigate = useNavigate();

// useEffect(()=> {

//     fetch(`http://localhost:4000/recipe/find/${_id}`)
//     .then((res) => res.json())
//     .then((data) => setRecipes((data)))
//     .catch((err) => console.error(err))

// },[_id])
    return (
        <>
        <div id="recipe-wrapper">
          {recipes.map((r, i) => (
              <div key={i} className="recipe">
                <div className="recipe-title">{r.title}</div>
                <div className="author">{r.author}</div>
                <div className="ingredients">{r.ingredients}</div>
                <div className="inst">{r.instructions}</div>
              </div>
        
          ))}
        </div>
      </>
    )
}

export default Recipe
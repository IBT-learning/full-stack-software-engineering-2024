import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from 'react-router-dom';
import './Home.css'

function Home (){
    
    const [recipes, setRecipes] = useState([])

useEffect(()=> {

    fetch('http://localhost:4000/recipe/')
    .then((res) => res.json())
    .then((data) => setRecipes((data)))
    .catch((err) => console.error(err))

})

    return (<>
      <div className="recipe">
      {recipes.map(recipe => (
        <div key={recipe._id} className="title">
          <Link to={`/recipe/${recipe._id}`}>
            {recipe.title}
          </Link>
        </div>
      ))}
    </div>
      <Link className="create-btn" to="/create">Create New Recipe</Link>
    </>)
}

export default Home
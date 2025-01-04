import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Helmet from "react-helmet";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import {useQuery} from 'react-query';

function Recipes() {
    const { id }= useParams();
    // const [recipe, setRecipe] = useState({});
    // console.log(id);
    
    // const fetchData = async () => {
    //     const res = await axios.get(`http://localhost:4000/${id}`)
    //     return res.data
    // }

    const fetchData = async ({ queryKey }) => {
        const [_key, recipeId] = queryKey; // queryKey contains ['recipe', id]
        const res = await axios.get(`http://localhost:4000/${recipeId}`);
        return res.data;
    };

    // useEffect(() => {
    //     axios.get(`http://localhost:4000/${id}`)
    //     .then(res => setRecipe(res.data))
    //     .catch(err => console.log(err))
    // }, [id])

    // const ingredient = recipe.ingredients || []
    // console.log(ingredient);


    const { data: recipe, isLoading, error } = useQuery(['recipe', id], fetchData)
    // if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>Error loading recipes</h1>;

    const ingredient = recipe?.ingredients || []
        
       
    
    return (
        <>
            {/* <Helmet>
            <title>{recipe.title}</title>
            </Helmet> */}
            
            { isLoading ?  
                (
                    <div>
                        <h2><Skeleton width={200} /></h2>
                        <h4><Skeleton width={150} /></h4>
                        <h4>Ingredients</h4>
                        <ul>
                            {[...Array(5)].map((_, i) => (
                                <li key={i}><Skeleton width={100} /></li>
                            ))}
                        </ul>
                        <h4>Instructions</h4>
                        <Skeleton count={3} />
                    </div>

                ) : (recipe &&
            <> 
                <Helmet>
                    <title>{recipe.title}</title>
                </Helmet>
            <div className='recipes-display'>
                <div className='recipes'>
                <h3>Recipe:</h3>
                <h2>{recipe.title}</h2>
                </div>
                <div className='recipes'>
                <h4>Author: </h4>
                <h4>{recipe.author}</h4>
                </div>
                <div className='recipe'>
                <h4>Ingredents:</h4>
                {ingredient.map((ingredient, i) => 
                    <li key={i}>{ingredient}</li>)}
                </div>
                <div className='recipe'>
                <h4>Instructions:</h4>
                <p>{recipe.instructions}</p>
                </div>

                <div className='edit-link'>
                <a href={`/edit/${recipe._id}`} className="btn btn-primary">{recipe._id ? "Edit Recipe" : <Skeleton width={100} />} </a>
                </div>
            </div>
            </>)}
        </>
    )
}

export default Recipes
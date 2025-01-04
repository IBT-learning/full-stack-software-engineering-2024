import Helmet from "react-helmet";
import axios from "axios"
import { useEffect } from "react";
import {useQuery} from 'react-query';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
// function HomePage({recipes, setRecipes}) {

//     useEffect(() => {
//         axios.get("http://localhost:4000/")
//         .then(res => setRecipes(res.data))
//         .catch(err => console.log(err))
//     }, [setRecipes])

function HomePage() {
    const allRecipe = async () => {
        const datas = await axios.get('http://localhost:4000/')
        return datas.data
    }

    const { data: recipes, isLoading, error } = useQuery('recipes', allRecipe);
    // if (isLoading) return <Skeleton count={10} />
    // if (error) return <p>Error: {error.message}</p>
    return (
        // View {
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-md-12">
        //                 <h1 className="text-center">Recipe App</h1>
        //             </div>
        // }
    <>
        <Helmet>
            <title>My Recipes</title>
        </Helmet>
        <h2>Available Recipes</h2>
        { isLoading ? < Skeleton count={10} /> : recipes.length === 0 ? <p>No Recipes Found</p> 
        : recipes.map(rec => 
            <div key={rec._id} className="card">
                <div className="card-body">
                    <h3 className="card-title">{rec.title ? rec.title : <Skeleton width={100}/>} </h3>
                    {/* <p className="card-text">{rec.description}</p> */}
                    <a href={`/recipe/${rec._id}`} className="btn btn-primary">{rec._id ? "View Recipe" : <Skeleton width={100} />} </a>
                </div>
            </div>)}
    </>
    )
}

export default HomePage
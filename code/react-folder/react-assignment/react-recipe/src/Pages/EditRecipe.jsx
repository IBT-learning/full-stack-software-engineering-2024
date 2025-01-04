import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Helmet from "react-helmet";
import axios from "axios"
import { useState, useEffect } from "react";
import {useQuery} from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const postData = async ({id, recipes}) => {
    const headers = {
        'Content-Type': 'application/json', // Add other custom headers if necessary
      };
    const res = await axios.put(`http://localhost:4000/update/${id}`, recipes, {headers});
    return res.data;
}

const deleteData = async ({id}) => {
    const headers = {
        'Content-Type': 'application/json', // Add other custom headers if necessary
      };
    const res = await axios.delete(`http://localhost:4000/delete/${id}`, {headers});
    return res.data;
}

function UpdateRecipe() {
    const {id} = useParams()

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState("");
    const navigate = useNavigate();

    const fetchData = async ({ queryKey }) => {
        const [_key, recipeId] = queryKey; // queryKey contains ['recipe', id]
        const res = await axios.get(`http://localhost:4000/${recipeId}`);
        return res.data;
    };

    const { data, isLoading, isError } = useQuery(['recipe', id], fetchData)

    useEffect(() => {
        if (data) {
            setTitle(data.title);
            setAuthor(data.author);
            setIngredients(data.ingredients);
            setInstructions(data.instructions);
        }
    }, [data]);

    const handleChange = (index, event) => {
        const values = [...ingredients];
        values[index] = event.target.value;
        setIngredients(values);
      };

    const handleAdd = () => {
        setIngredients([...ingredients, '']);
      };

    const handleRemove = (index) => {
        if (ingredients.length > 1) {
            const values = [...ingredients];
            values.splice(index, 1);
            setIngredients(values);
        }
    }

    const mutation = useMutation(postData, 
        { onSuccess: (data) => {
    // Redirect to the homepage after success
            navigate(`/recipe/${id}`);
            // Reset form
            // setTitle('');
            // setAuthor('');
            // setIngredients('');
            // setInstructions('');
        },
        onError: (error) => {
        // Optionally handle the error, e.g., show a message
            console.error('Error:', error);
        }
    })

    const mutationDelete = useMutation(deleteData,
        { onSuccess: (data) => {
            navigate('/');
        },
        onError: (error) => {
            console.error('Error:', error);
        }
    })

    const handleDelete = () => {
        mutationDelete.mutate({id})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const recipes = {
            title,
            author,
            ingredients: ingredients,
            instructions,
        };

        mutation.mutate({id, recipes})
    }

    if (isLoading) {
        return (
            <div className="container">
                <Skeleton height={30} width="60%" style={{ marginBottom: '10px' }} />
                <Skeleton height={20} width="90%" style={{ marginBottom: '10px' }} />
                <Skeleton height={100} width="100%" style={{ marginBottom: '10px' }} />
                <Skeleton height={100} width="100%" style={{ marginBottom: '10px' }} />
                <Skeleton height={40} width="30%" />
            </div>
        );
    }


    if (isError) {
        return <p>Error loading recipe. Please try again later.</p>;
    }

    return (
        <div className="container">
            <Helmet>
                <title>Edit Recipe</title>
            </Helmet>
            <h1>Edit Recipe</h1>
            <form onSubmit={handleSubmit} className='form-container'>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients:</label>
                    {ingredients.map((ingredient, index) => (
                        <div key={index}>
                            <input type="text" id='ingredients' value={ingredient} onChange={(e) => handleChange(index, e)} required />
                            <button type="button" onClick={() => handleRemove(index)}>Remove Ingredient</button>
                        </div>
                    ))}
                    <button type="button" onClick={handleAdd}>Add More Ingredient</button>
                    {/* // <label htmlFor="ingredients">Ingredients:</label>
                    // <textarea id="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required /> */}
                </div>
                <div className="form-group">
                    <label htmlFor="instructions">Instructions:</label>
                    <textarea id="instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
                </div>
                <div className='form-group'>
                <button type="submit" disabled={mutation.isLoading}>{mutation.isLoading ? 'Updating...' : 'Update Recipe'}</button>
                <Link to="/" className="btn btn-secondary">Cancel</Link>
                <button type='button' onClick={handleDelete} className="btn btn-danger">Delete</button>
                </div>
                
            </form>
            
        </div>
    )
}

export default UpdateRecipe
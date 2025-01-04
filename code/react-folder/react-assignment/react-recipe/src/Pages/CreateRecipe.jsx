import Helmet from "react-helmet";
import axios from "axios"
import { useState } from "react";
import {useQuery} from 'react-query';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// post request handler async function using axios
const postData = async (recipe) => {
    const headers = {
        'Content-Type': 'application/json', // Add other custom headers if necessary
      };
    const res = await axios.post(`http://localhost:4000/add/recipes`, recipe, {headers});
    return res.data;
}


function createRecipe() {

    // State variables for form inputs
        const [title, setTitle] = useState("");
        const [author, setAuthor] = useState("");
        const [ingredients, setIngredients] = useState([{value: ""}]);
        const [instructions, setInstructions] = useState("");

    // Initialize the navigate function from React Router
        const navigate = useNavigate();
    
    // Use React Query's `useMutation` hook for the POST request 
    // This hook returns an object with two properties:
    // - mutate: A function that can be called to perform the mutation.
    // - isMutating: A boolean that indicates whether the mutation is in progress.
    // - error: An error object if a mutation has failed.
    // - data: The data returned by the mutation.
    // - status: The HTTP status code of the response.
        // Note: isError and error are only available when the mutation has failed.
        // To check if the mutation has succeeded, use the isLoading property.
        // To check if the mutation is in progress, use the isMutating property.
        // To get the data returned by the mutation, use the data property.
        // To get the HTTP status code of the response, use the status property.
        // To get the error object if a mutation has failed, use the error property.
        // To get the mutation object, use the mutation property.
        // To get the mutate function, use the mutate property.
        // isSuccess is true if the mutation has succeeded and false otherwise it is false. Default is false.
        // const { mutate, isLoading, isError, isSuccess, isMutating, error, data, status } = useMutation(postData);
        const mutation = useMutation(postData, 
               { onSuccess: (data) => {
                alert("recipe added successfully")
                  // Redirect to the homepage after success
                  navigate('/');
                  // Reset form
                  setTitle('');
                  setAuthor('');
                  setIngredients('');
                  setInstructions('');
                },
                onError: (error) => {
                    // Optionally handle the error, e.g., show a message
                    console.error('Error:', error);
                  },
            });

            const handleChange = (index, event) => {
                const values = [...ingredients];
                values[index].value = event.target.value;
                setIngredients(values);
              };
        
            const handleAdd = () => {
                setIngredients([...ingredients, { value: '' }]);
              };
        
            const handleRemove = (index) => {
                if (ingredients.length > 1) {
                    const values = [...ingredients];
                    values.splice(index, 1);
                    setIngredients(values);
                }
            }

    // Handle form submission
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(ingredients);
            

        // prepare the data for the submit event and send it to the server for processing and validation purposes with mutation
            const newData = {
                title,
                author,
                ingredients: ingredients.map((ingredient => ingredient.value)),
                instructions
            }

        // Call the mutate funcion(method) through the mutation object created above with useMutation(postData)
        // call it with newData object created from form input and send the post request to the server for processing and validation purposes
            mutation.mutate(newData);
        }

    return (
        <div>
            <Helmet>
                <title>Create a Recipe</title>
            </Helmet>

            <h1>Create a Recipe</h1>
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
                            <input type="text" id="ingredients" value={ingredient.value} onChange={(e) => handleChange(index, e)} required />
                            <button type="button" onClick={() => handleRemove(index)}>Remove Ingredient</button>
                        </div>
                    ))}
                    <button type="button" onClick={handleAdd}>Add More Ingredient</button>
                </div>

                {/* <label htmlFor="ingredients">Ingredients:</label>
                <textarea placeholder="input ingredients with comma separated" id="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required /> */}

                <div className="form-group">
                <label htmlFor="instructions">Instructions:</label>
                <textarea id="instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} required></textarea>
                </div>

                <div className="form-group">
                <button type="submit" disabled={mutation.isLoading}>
                    {mutation.isLoading ? 'Submitting...' : 'Create Recipe'}
                </button>
                </div>
                

                {mutation.isSuccess && <p>Recipe Added Successfuly</p>}
                {mutation.isError && <p>Error: {mutation.error.message}</p>}

                {/* Optionally display the data returned from the POST request */}
                {/* {data && <p>New Recipe Added: {data.title}</p>} */}
                
                {/* Show loading skeleton while the mutation is in progress */}
                {/* {mutation.isMutating && <p>Loading...</p>} */}
            </form>
        </div>
    )


}

export default createRecipe;
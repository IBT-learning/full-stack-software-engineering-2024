import mongoose from 'mongoose';

// Defining the schema
const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true, maxlength: 100 },
    author: { type: String, required: true, maxlength: 50 },
    instructions: { type: String, required: true },
    ingredients: { type: [String], required: true }, // Array of strings
});

// Creating the model
const Recipe = mongoose.model('Recipe', recipeSchema);

// Exporting the model
export default Recipe;

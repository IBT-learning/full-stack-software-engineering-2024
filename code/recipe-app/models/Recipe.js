const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100
    },
    author: {
        type: String,
        required: true,
        maxlength: 50
    },
    instructions: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

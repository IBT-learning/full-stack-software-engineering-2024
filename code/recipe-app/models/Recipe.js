const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100,
  },
  author: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  ingredients: [{
    type: String,
    required: true,
  }],
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;

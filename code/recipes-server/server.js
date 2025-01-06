import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Recipe from './models/Recipe.js';

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
mongoose.connect('mongodb://localhost:27017/recipes');

// Routes
app.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find({}, 'title ingredients instructions'); // Specify the fields to include
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/recipe/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch recipe' });
  }
});

app.post('/recipes', async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create recipe' });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

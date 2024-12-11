import express, { Router } from 'express';
import { createRecipe, updateRecipe, deleteRecipe } from '../controllers/recipeController.js';
import tokenValidation from '../middleware/tokenValidation.js';

const router = express.Router();

// Public route for getting all recipes (no authentication needed)
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({ recipes });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Authentication required for other routes
router.use(tokenValidation);

// Protected routes
router.post('/', createRecipe);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

export default Router;

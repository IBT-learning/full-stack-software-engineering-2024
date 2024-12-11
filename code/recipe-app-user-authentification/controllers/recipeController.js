import Recipe from '../models/recipe.js';

const createRecipe = async (req, res) => {
  try {
    const newRecipe = await Recipe.create({ ...req.body, createdBy: req.user._id });
    res.status(201).json({ message: 'Recipe created', recipe: newRecipe });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    if (!recipe.createdBy.equals(req.user._id)) {
      return res.status(403).json({ error: 'Unauthorized to update this recipe' });
    }

    Object.assign(recipe, req.body);
    await recipe.save();
    res.status(200).json({ message: 'Recipe updated', recipe });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    if (!recipe.createdBy.equals(req.user._id)) {
      return res.status(403).json({ error: 'Unauthorized to delete this recipe' });
    }

    await recipe.remove();
    res.status(200).json({ message: 'Recipe deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { createRecipe, updateRecipe, deleteRecipe };

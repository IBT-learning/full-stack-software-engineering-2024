const Recipe = require('../models/Recipe');

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe({
      ...req.body,
      createdBy: req.user.id,
    });

    const recipe = await newRecipe.save();
    console.log(req.user.id)
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    if (recipe.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ error: 'Unauthorized' });
    }
    Object.assign(recipe, req.body);
    await recipe.save();
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    if (recipe.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    res.status(200).json({ message: 'Recipe deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

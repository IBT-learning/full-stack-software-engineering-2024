import express from "express";
const router = express.Router()
import { mongoose } from "../db.js";
import jwt from "jsonwebtoken"
import tokenValidation from "../middlewares/tokenValidation.js"

import Recipe from "../models/Recipe.js";

const JWT_KEY = "Shh it's a secret"



//Get all recipes
router.get("/", tokenValidation, async (req, res) => {
 try{
  const recipe = await Recipe.find()
  res.send(recipe)
 } catch(err) {
  res.status(500).send({message: err.message})
 }
})

// Get a single recipe by id
router.get("/find/:id", tokenValidation, async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    const recipe= await Recipe.findOne({ _id: req.params.id })
    recipe ? res.json(recipe) : res.status(404).send("Recipe not found")
  } else {
    res.status(404).send("Invalid recipe id")
  }
})

//Create a new recipe
router.post("/", tokenValidation, async (req, res) => {
  try {
    const newRecipe = new Recipe({...req.body, createdBy: req.user._id})
    await newRecipe.save()
    res.send(`Added ${req.body.title} recipe`)
  } catch (err) {
    res.status(400).send(err)
  }
})

//Update an existing recipe
router.put("/update/:id", tokenValidation, async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).send("Recipe not found");
    }
    if (recipe.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).send("You do not have permission to update this recipe");
    }
    Object.assign(recipe, req.body);
    await recipe.save();
    res.send(`Updated ${recipe.title} recipe`);
  } catch (err) {
    console.log("Error in update recipe:", err);
    res.status(400).send(err);
  }
})

//Delete a recipe
router.delete("/delete/:id", tokenValidation, async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).send("Recipe not found");
    }
    if (recipe.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).send("You do not have permission to delete this recipe");
    }
    await recipe.deleteOne();
    res.send(`Deleted ${recipe.title} recipe`);
  } catch (err) {
    console.log("Error in delete recipe:", err);
    res.status(400).send(err);
  }
})

export default router


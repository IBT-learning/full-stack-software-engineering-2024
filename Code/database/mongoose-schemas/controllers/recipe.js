import e from "express";
const router = e.Router()
import { mongoose } from "../db.js";

import Recipe from "../models/Recipe.js";

//Get all recipes
router.get("/", async (req, res) => {
 try{
  const recipe = await Recipe.find()
  res.send(recipe)
 } catch(err) {
  res.status(500).send({message: err.message})
 }
})

// Get a single recipe by id
router.get("/find/:id", async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    const recipe= await Recipe.findOne({ _id: req.params.id })
    recipe ? res.json(recipe) : res.status(404).send("recipe not found")
  } else {
    res.status(404).send("invalid recipe id")
  }
})

//Create a new recipe
router.post("/", async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body)
    await newRecipe.save()
    res.send(`added ${req.body.title} recipe`)
  } catch (err) {
    res.status(422).send(err)
  }
})

//Update an existing recipe
router.put("/update/:id", async (req, res) => {
  await Recipe.findByIdAndUpdate({_id: req.params.id}, req.body)
  res.send(`Updated successfully`)
})

//delete a recipe
router.delete("/delete/:id", async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    await Recipe.deleteOne()
    res.send("Recipe successfully deleted")
  } else {
    res.status(404).send("invalid recipe id")
  }
})

export default router


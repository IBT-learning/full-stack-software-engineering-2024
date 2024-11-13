import express from "express"
const router = express.Router()
import { mongoose } from "../db.js";

import Recipe from "../models/Recipe.js"

// get all
router.get("/", async (req, res) => {
    const recipes = await Recipe.find()
    res.send(recipes)
})

// get one by an id
router.get("/find/:id", async (req, res) => {
    const recipes = await Recipe.findById(req.params.id)
    res.send(recipes)
})

// create a new document
router.post("/", async (req, res) => {
    const newRecipe = new Recipe(req.body)
    await newRecipe.save()
    res.send(`${req.body.author} added ${req.body.title} recipe`)
})
//update a recipe by id
router.put("/update/:id", async (req, res)=> {
 await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send("updated successfully")
})

// delete an existing document by id
router.delete("/delete/:id", async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) return res.status(404).send({ message: 'Recipe not found' });
        res.send({ message: 'Recipe deleted' });
      } catch (err) {
        res.status(500).send({ message: err.message });
      }
})
export default router


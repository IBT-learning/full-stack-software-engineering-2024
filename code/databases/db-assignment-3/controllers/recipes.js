import express from "express"
const router = express.Router()
import { mongoose } from "../db.js";
import tokenValidator from "../middlewares/tokenValidator.js";

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
router.post("/",tokenValidator, async (req, res) => {
    const newRecipe = new Recipe({
        ...req.body,
        createdBy: req.user._id
    })
    await newRecipe.save()
    res.send(`${req.body.author} added ${req.body.title} recipe`)
})
//update a recipe by id
router.put("/update/:id", tokenValidator,  async (req, res)=> {
    try {
        // Find the recipe by its ID
        const recipe = await Recipe.findById(req.params.id);

        // Check if the recipe exists
        if (!recipe) {
            return res.status(404).send("Recipe not found");
        }

        // Check if the authenticated user is the owner of the recipe
        if (recipe.createdBy.toString() !== req.user._id.toString()) {
            return res.status(403).send("You do not have permission to update this recipe");
        }

        // Perform the update and return the updated recipe
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).send(`Recipe "${updatedRecipe.title}" updated successfully`);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


// delete an existing document by id
router.delete("/delete/:id", tokenValidator, async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) return res.status(404).send({ message: 'Recipe not found' });
        res.send({ message: 'Recipe deleted' });
      } catch (err) {
        res.status(500).send({ message: err.message });
      }
})
export default router

import express from "express"
import mongoose from "mongoose"

const router = express.Router()

import Recipe from "../modeels/Recipe.js"

router.get ("/", async (req, res) => {
    const recipe = await Recipe.find()
    res.send(recipe)
})

router.get ("/find/:recipeId", async (req, res) => {
    const { recipeId } = req.params

    if (!mongoose.Types.ObjectId.isValid(recipeId)) {
        return res.status(404).send("Invalid Id")
    }

    const recipe = await Recipe.findOne({
        _id: req.params.recipeId
    })
    recipe ? res.json(recipe): res.status(404).send("Recipe not found")
})

router.post("/", async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body)
        await newRecipe.save()
        res.send(`${req.body.title} recipe successfully added`)
    }catch(err){
        res.status(404).send("New recipe could not be addded")
    }
   
})

router.put("/add/:recipeId", async(req, res) => {
   if (mongoose.Types.ObjectId.isValid(req.params.recipeId)){
        const find = { _id: req.params.recipeId }
        const body = req.body
        const options = {
            upsert: false
        }
        const recipe = await Recipe.updateOne(find, body)
        if (recipe.modifiedCount === 1){
            res.send ("Recipe successfully updated")
        } else{
            res.status(404).send("recipe update failed")
        }
   } else {
        res.status(404).send ("The recipe with this Id does not exist in the database")
   }
})

router.delete("/delete/:recipeId", async(req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.recipeId)){
        const find = { _id: req.params.recipeId }
        const recipe = await Recipe.deleteOne(find)
        if (recipe.deletedCount === 1){
            res.send("Recipe successfully deleted")
        } else {
            res.status(404).send ("Recipe could not be deleted")
        }
    } else {
        res.status(404).send ("The recipe with this Id does not exist in the database")
    }

})
export default router

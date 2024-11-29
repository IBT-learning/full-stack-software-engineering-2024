import express from "express"
import mongoose from "mongoose"
import tokenValidator from "../middleware/tokenValidator.js"
const router = express.Router()

import Recipe from "../models/Recipe.js"
import User from "../models/User.js"

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

router.post("/create", tokenValidator, async (req, res) => {
    try {
        const {title, author, instructions, ingredients } = req.body
        const createdBy = req.user._id

        const newRecipe = new Recipe({
            title,
            author,
            instructions,
            ingredients,
            createdBy,
        })
        await newRecipe.save()
       return res.send(`${req.body.title} recipe successfully added`)
    }catch(err){
        res.status(404).send("New recipe could not be addded")
    }
   
})

router.put("/update/:recipeId", tokenValidator, async(req, res) => {
    const { recipeId } = req.params
   if (mongoose.Types.ObjectId.isValid(recipeId)){
    const recipe = await Recipe.findById(recipeId)
    if(!recipe){
        return res.status(404).send("recipe not found")
    }

    if (String(recipe.createdBy)  !== String(req.user._id)){
        return res.status(401).send("User not authorized to update recipe")
    }
        const find = { _id: recipeId }
        const body = req.body
        const options = {
            upsert: false
        }
        const updatedRecipe = await Recipe.updateOne(find, body)
        if (updatedRecipe.modifiedCount === 1){
          return  res.send ("Recipe successfully updated")
        } else{
           return res.status(404).send("recipe update failed")
        }
   } else {
       return res.status(404).send ("The recipe with the id cannot be found in the database")
   }
})

router.delete("/delete/:recipeId", tokenValidator, async(req, res) => {
    const { recipeId } = req.params
    if (mongoose.Types.ObjectId.isValid(recipeId)){
       
        const recipe = await Recipe.findById(recipeId)
        if (!recipe){
            return res.status(404).send("recipe not found")
        }
        if (String(recipe.createdBy) !== String(req.user._id)){
            return res.status(401).send("User not authorized to delete recipe")
        }
        const find = { _id: recipeId }
        const deleteRecipe = await Recipe.deleteOne(find)
        if (deleteRecipe.deletedCount === 1){
            res.send("Recipe successfully deleted")
        } else {
            res.status(404).send ("Recipe could not be deleted")
        }
    } else {
        res.status(404).send ("The recipe with this Id does not exist in the database")
    }

})

//extra challenge 
    router.get("/return/:userId", tokenValidator, async(req, res) => {
        try{
            const userId  = req.user._id
            if (mongoose.Types.ObjectId.isValid(userId)){
                const userRecipe = await Recipe.find({createdBy: userId})
                if (!userRecipe){
                    return res.status(404).send("user has no recipe in database")
                }
                res.json(userRecipe)
            } else{
                return res.status(404).send("Invalid user ID")
            }
        } catch (err){
            res.status(404).send(err)
        }
       
    })
export default router

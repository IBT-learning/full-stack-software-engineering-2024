import express from 'express';
import Recipe from "../models/Recipe.js"
import { mongoose } from '../db.js';

const router =  express.Router();

router.get("/", async (req, res) => {
    try{  
        const recipes = await Recipe.find()
        res.send(recipes)
    } catch (err){
        res.status(500).send(`Error fetching recipes: ${err}`)
    }
})

router.get("/find/:recipeId", async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.recipeId)){

        const recipe = await Recipe.findOne({_id:req.params.recipeId})
        recipe? res.json(recipe) : res.status(404).send("recipe not found")
    } else {
        res.status(404).send("invalid recipe id")
    }
})

router.post("/", async (req, res) => {
    console.log("Incoming request body:", req.body);
    try{

        const newRecipe = new Recipe(req.body)
        await newRecipe.save()
        res.send(`added ${req.body.title} by ${req.body.author}`)
    } catch (err){
        res.status(422).send(err.errors.title)
    }
})


router.put("/update/:recipeId", async (req, res)=> {
    if (mongoose.Types.ObjectId.isValid(req.params.recipeId)){
        const filter = {_id: req.params.recipeId}
        const body = req.body
        const options = { upsert: true }
        const recipe = await Recipe.updateOne(filter, body, options)
        console.log(recipe)

        if (recipe.modifiedCount === 1) {
            res.send("recipe successfully updated")
          } else if (recipe.upsertedCount === 1) {
            res.send("recipe successfully added")
          } else {
            res.send("operation failed")
          }
        } else {
          res.status(404).send("invalid recipe id")
    }
})

router.delete("/delete/:recipeId", async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
      const filter = { _id: req.params.recipeId }
      const result = await Recipe.deleteOne(filter)
      if (result.deletedCount === 1) {
        res.send("successfully deleted")
      } else {
        res.send("something went wrong")
      }
    } else {
      res.status(404).send("invalid recipe id")
    }
  })
export default router
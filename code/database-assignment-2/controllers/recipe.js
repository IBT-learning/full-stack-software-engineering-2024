import express from "express"
const router = express.Router()
import { mongoose } from "../db.js"
import Recipe from "../recipe-schema-models/Recipe.js"

router.get("/get", async (req, res) => {
    
    const recipes = await Recipe.find()
    res.send(recipes)
    console.log(recipes);
    
  })

router.get("/find/:recipeId", async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
      const recipe = await Recipe.findOne({ _id: req.params.recipeId })
       recipe? res.json(recipe) : res.status(404).send("recipe not found")
       console.log(recipe);
       
    } else {
      res.status(404).send("invalid  id")
    }
  })

  router.post("/post", async (req, res) => {
    try {
      const newRecipe = new Recipe(req.body)
      await newRecipe.save()
      res.send("Bilha added a new recipe")
    } catch (err) {
      res.status(400).send("Invalid JSON syntax")
      console.log("Invalid JSON");
      
    }
  })

  router.put("/update/:recipeId", async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
      const recipe1 = await Recipe.updateOne( {_id: req.params.recipeId}, req.body)
      console.log(recipe1)
    } else {
      res.status(404).send("invalid id")
    }
  })

  router.delete("/delete/:recipeId", async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
      const filter = { _id: req.params.recipeId }
       await Recipe.deleteOne(filter)
       res.send("Deleted successfully")
    } else {
      res.status(404).send("invalid id")
    }
  })
   
  export default router
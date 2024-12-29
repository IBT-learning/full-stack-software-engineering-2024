import express from 'express';
import Recipe from "../model/Recipe.js"
import { mongoose } from '../db.js';
import tokenValidation from '../middlewares/tokenValidation.js';

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

router.get("/user/:userId", async (req,res)=> {
  const userId = req.params.userId

  if(!mongoose.Types.ObjectId.isValid(userId)){
    res.status(400).send("Invalid user ID")
  }

  try{
    const userRecipes = await Recipe.find({ createdBy: userId})
    
    if (userRecipes.length ===0){
      res.status(404).send("no recipes found for this user")
    }

    return res.json(userRecipes)
  } catch (err){
    console.error(err)
    res.status(500).send("server error")
  }
})

router.post("/", tokenValidation, async (req, res) => {
    console.log("Incoming request body:", req.body);
    try{

        const newRecipe = new Recipe({
          ...req.body,
        createdBy: req.user._id});
        await newRecipe.save()
        res.send(`added ${req.body.title} by ${req.body.author}`)
    } catch (err){
        res.status(422).send(err.errors.title)
    }
})


router.put("/update/:recipeId", tokenValidation, async (req, res)=> {
    if (mongoose.Types.ObjectId.isValid(req.params.recipeId)){
        const filter = {_id: req.params.recipeId}
        const body = req.body
        const options = { upsert: true }

        const recipe = await Recipe.findById(req.params.recipeId)
        if (!recipe) {
          return res.status(404).send("Recipe not found");
      }

        if (recipe.createdBy.toString() !== req.user._id.toString()){
          res.status(403).send(`You are not authorized to update this`)
        }

        const updatedRecipe = await Recipe.updateOne(filter, req.body);

        if (updatedRecipe.modifiedCount === 1) {
          res.send("Recipe successfully updated");
         } else {
          res.send("Operation failed");
          }
    } else {
          res.status(404).send("invalid recipe id")
    }
})

router.delete("/delete/:recipeId", tokenValidation, async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
      const recipe = await Recipe.findById(req.params.recipeId);
        if (!recipe) {
            return res.status(404).send("Recipe not found");
        }

      if (recipe.createdBy.toString() !== req.user._id.toString()) {
        return res.status(403).send("You are not authorized to delete this recipe");
    }

    const result = await Recipe.deleteOne({ _id: req.params.recipeId });

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
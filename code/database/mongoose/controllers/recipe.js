import express from "express"
const myRouter = express.Router()

import mongoose from "mongoose"
import Recipe from "../models/Recipe.js"

const recipeDb = async() => {
    try{
        await mongoose.connect("mongodb://localhost:27017/recipe")
        console.log("Database Name:", mongoose.connection.name);
        console.log(`Connected to database`);
    }
    catch(err){
        console.warn(`Error`);
    }
}

recipeDb()


myRouter.get("/", async (req, res) => {
    try {
      const myRecipe = await Recipe.find();
      console.log(myRecipe);
      res.send(myRecipe);
    } catch (err) {
      console.error(err);
      res.status(500).send("An error occured while retrieving recipes");
    }
  });

myRouter.get("/find/:recipeId", async(req,res)=>{
    if (mongoose.Types.ObjectId.isValid(req.params.recipeId)){
        const myRecipe = await Recipe.findOne({_id:req.params.recipeId})
        myRecipe ? res.json (myRecipe) : res.status (404). send ("recipe not found")
    } else{
        res.status(404).send("Invalid recipe ID")
    }
})

myRouter.put("/update/:recipeId", async (req, res) => {
    try {
      const myRecipe = await Recipe.updateOne({ _id: req.params.recipeId }, req.body);
      if (myRecipe.matchedCount === 1) {
        console.log("Update completed");
        return res.send("Update completed");
      } else{
      res.status(404).send("Recipe not found");
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Error updating recipe");
    }
  });

  myRouter.put("/findandupdate/:recipeId", async (req, res) => {
    const myRecipe = await Recipe.findOneAndUpdate({_id: req.params.recipeId}, req.body);
  
    if (myRecipe) {
      console.log(myRecipe);
      res.send("Database updated successfully");
    } else {
      res.status(404).send("Recipe not found");
    }
  });

  myRouter.delete("/delete/:recipeId", async (req, res) => {
    const myRecipe = await Recipe.deleteOne({ _id: req.params.recipeId });
  
    if (myRecipe.deletedCount) {
      res.send("Document deleted");
    } else {
      res.status(404).send("Recipe not found");
    }
  });
export default myRouter

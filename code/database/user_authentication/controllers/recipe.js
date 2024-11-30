import express from "express"
const myRouter = express.Router()
import { recipeDb } from "../db.js"

import mongoose from "mongoose"
import Recipe from "../models/Recipe.js"


//Get all (return all documents)
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

  //Get one by ID (return a single document)
myRouter.get("/find/:recipeId", async(req,res)=>{
    if (mongoose.Types.ObjectId.isValid(req.params.recipeId)){
        const myRecipe = await Recipe.findOne({_id:req.params.recipeId})
        myRecipe ? res.json (myRecipe) : res.status (404). send ("recipe not found")
    } else{
        res.status(404).send("Invalid recipe ID")
    }
})

//Update an existing document by ID
myRouter.put("/update/:recipeId", async (req, res) => {
    try {
      const myRecipe = await Recipe.updateOne({ _id: req.params.recipeId }, req.body);
      if (myRecipe.matchedCount === 1) {
        console.log("Update completed");
        res.send("Update completed");
      } else{
      res.status(404).send("Recipe not found");
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Error updating recipe");
    }
  });

  // Create a new document (add a new document to the database)
  myRouter.post("/create", async (req, res) => {
    try {
      if (!req.user || !req.user._id) {
        res.status(401).send("User not authenticated");
      }
      const newRecipe = new Recipe({
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        createdBy: req.user._id, // adding the user ID from the tokenValidator middleware
      });
  
      await newRecipe.save();
      res.status(201).send("Recipe created successfully");
    } catch (err) {
      console.error(err);
      res.status(400).send("Error occurred while creating recipe");
    }
  });

  //Update an existing document by ID. // Change your Update endpoint to check whether the validated user matches the createdBy field on the recipe
  myRouter.put("/findandupdate/:recipeId", async (req, res) => {
    try {
      const recipe = await Recipe.findOne({ _id: req.params.recipeId });
  
      if (!recipe) {
         res.status(404).send("Recipe not found");
      }
  
      // checking if the user is the creator of the recipe
      if (recipe.createdBy.toString() !== req.user._id.toString()) {
         res.status(403).send("Access Denied! You are not authorized to update this recipe");
      }
  
      // update if the user is the creator
      const updatedRecipe = await Recipe.findOneAndUpdate({ _id: req.params.recipeId }, req.body, { new: true });
  
      res.status(200).send("Recipe updated successfully");
  
    } catch (err) {
      console.error(err);
      res.status(500).send("Error updating recipe");
    }
  });
  

  //Delete an existing document by ID. //Change your Delete endpoint to do the same thing!
  myRouter.delete("/delete/:recipeId", async (req, res) => {
    try {
      const myRecipe = await Recipe.findOne({ _id: req.params.recipeId });
  
      if (!myRecipe) {
         res.status(404).send("Recipe not found");
      }
  
      // checking if the user is the creator of the recipe
      if (myRecipe.createdBy.toString() !== req.user._id.toString()) {
         res.status(403).send("Access Denied! You are not authorized to delete this recipe");
      }
  
      // Delete the recipe
      const result = await Recipe.deleteOne({ _id: req.params.recipeId });
  
      if (result.deletedCount === 1) {
        return res.status(200).send("Recipe deleted successfully");
      } else {
        return res.status(400).send("Failed to delete recipe");
      }
  
    } catch (err) {
      console.error(err);
      res.status(500).send("Error deleting recipe");
    }
  });
  
export default myRouter


/**
 * # Database Assignment #3: Add users to your recipe app

You have already written a CRUD app for recipes. Now let's add user authentication, so that anybody can read recipes but only certain users can add, update, or delete recipes. The goal is that when registered users create a recipe, they will "own" that recipe, so that only they are allowed to modify or delete it.

### Add users to your app

Add a `User` model and a `users.js` controller with endpoints for creating an account, and for logging in. (So far this will look very similar to what's in the [user-auth lesson notes](../user-auth/), and that's okay!) It's up to you whether you want to define any additional fields on the user schema, beyond `email` and `password`.

### Add token validation

Create a middleware that validates tokens, (this will also look very similar to the lesson,) and then apply that middleware _only_ to your Create, Update, and Delete endpoints (that part will be somewhat different from the lesson example!)

Make sure your validation is fully working, and only valid users can access the restricted endpoints, before you proceed to the next step.

### Now for the interesting part...

If only users who created a recipe can make changes, that means our Schema needs to be updated to start recording who created each recipe. Each Recipe will have a `createdBy` field that stored an ObjectId, which represents a user in the database. (This is called a "foreign key", where a key from another collection is stored as a field on our documents.)

1. Add a field to the Recipe schema that looks like this:
   - `createdBy: mongoose.Schema.ObjectId` (it doesn't need more because we don't need to specify any other constraints on this field)
1. Change your Create endpoint to add the validated user's `_id` to the Recipe object before you save it.
   - How do you know what the validated user's `_id` is? Try adding the user object to the `req` during the `tokenValidation` middelware. Remember that middlewares always have access to the request and response objects, and can modify them! Those modifications will then be received by the next function in the call stack.
1. Change your Update endpoint to check whether the validated user matches the `createdBy` field on the recipe.
   - Remember to include sensible error handling. What do you think would be the right HTTP status code for a request on a recipe the user doesn't own?
1. Change your Delete endpoint to do the same thing!

> NOTE: You will need multiple users in your database to thoroughly test these endpoints

### Extra challenges

##### Cookies

In the next lesson I will demonstrate how to add the user's JWT to a browser cookie, but you already know everything you need to figure that out on your own! Don't worry too much about testing it, but if you like you could just open up any of your web-api assignments and have them manually make a fetch with your credentials, then check to see if your JWT is in Storage > Cookies

##### Get all by user

Try adding a new GET endpoint that returns all of the recipes that were created by a certain user. You will need to use `.find()` with a query object, similar to the query objects we use for `.findOne()`
 */
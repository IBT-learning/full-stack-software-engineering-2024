import express, { Router } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import User from "../models/User-model.js"
import Recipe from "../models/Recipe.js"

const myRouter = express()
const SALT = 10
const JWT_KEY = "key"


myRouter.post("/register", async(req, res) =>{
try{
    const{ username,email,password} = req.body

    //checks if all fields are provided
    if (!username|| !email|| !password){
        return res.status(404).send("All fields are required")
    }
    //checks if User already exits
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });//The $or operator in MongoDB allows you to specify multiple conditions, and it returns documents that match any of the given conditions.
        if (existingUser) {
            return res.status(400).send("Username or email already exists");
        }
    
    const newUser = new User({
        username,
        email,
        password: bcrypt.hashSync(password, SALT)
    })
    await newUser.save()
    res.send(`New user ${req.body.username} created`)
} catch(err){
    console.log("Error occurred creating new user");
    res.status(500).send("Error occurred creating new user")
}
})

myRouter.post("/login", async(req,res)=>{
    try{
    const{ username,password} = req.body
    const newUser = await User.findOne({username})
    if(!newUser){
        res.send(`username ${req.body.username} unknown`)
    }else{
        const passwordVerified = await bcrypt.compare(password, newUser.password)
        if(!passwordVerified){
             res.status(401).send("Password is incorrect")
        }
        else{
            res.cookie("token", token, {
                httpOnly: true, 
                maxAge: 60 * 60 * 24 * 1000
              });
            res.json({message: "user verified", token, newUser})
        }
    }
}catch(err){
    console.error(err);
    res.status(500).send("Server error occurred");
}
})

// all recipes by a specific user
myRouter.get("/login/:userId/recipes", async (req, res) => {
    try {
        const { userId } = req.params;
        // verify the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send("User not found");
        }

        // all recipes created by this user
        const recipes = await Recipe.find({ createdBy: userId });

        if (recipes.length === 0) {
            return res.status(404).send("No recipes found for this user");
        }
        else{ 
        res.status(200).json(recipes);// returns the found recipes
    }
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error occurred");
    }
});


export default myRouter


/**
 * Database Assignment #3: Add users to your recipe app
You have already written a CRUD app for recipes. Now let's add user authentication, so that anybody can read recipes but only certain users can add, update, or delete recipes. The goal is that when registered users create a recipe, they will "own" that recipe, so that only they are allowed to modify or delete it.

Add users to your app
Add a User model and a users.js controller with endpoints for creating an account, and for logging in. (So far this will look very similar to what's in the user-auth lesson notes, and that's okay!) It's up to you whether you want to define any additional fields on the user schema, beyond email and password.

Add token validation
Create a middleware that validates tokens, (this will also look very similar to the lesson,) and then apply that middleware only to your Create, Update, and Delete endpoints (that part will be somewhat different from the lesson example!)

Make sure your validation is fully working, and only valid users can access the restricted endpoints, before you proceed to the next step.

Now for the interesting part...
If only users who created a recipe can make changes, that means our Schema needs to be updated to start recording who created each recipe. Each Recipe will have a createdBy field that stored an ObjectId, which represents a user in the database. (This is called a "foreign key", where a key from another collection is stored as a field on our documents.)

Add a field to the User schema that looks like this:
createdBy: mongoose.Schema.ObjectId (it doesn't need more because we don't need to specify any other constraints on this field)
Change your Create endpoint to add the validated user's _id to the Recipe object before you save it.
How do you know what the validated user's _id is? Try adding the user object to the req during the tokenValidation middelware. Remember that middlewares always have access to the request and response objects, and can modify them! Those modifications will then be received by the next function in the call stack.
Change your Update endpoint to check whether the validated user matches the createdBy field on the recipe.
Remember to include sensible error handling. What do you think would be the right HTTP status code for a request on a recipe the user doesn't own?
Change your Delete endpoint to do the same thing!
NOTE: You will need multiple users in your database to thoroughly test these endpoints

Extra challenges
Cookies
In the next lesson I will demonstrate how to add the user's JWT to a browser cookie, but you already know everything you need to figure that out on your own! Don't worry too much about testing it, but if you like you could just open up any of your web-api assignments and have them manually make a fetch with your credentials, then check to see if your JWT is in Storage > Cookies

Get all by user
Try adding a new GET endpoint that returns all of the recipes that were created by a certain user. You will need to use .find() with a query object, similar to the query objects we use for .findOne()
 */
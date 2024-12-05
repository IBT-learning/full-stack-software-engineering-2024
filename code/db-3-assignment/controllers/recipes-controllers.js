import { mongoose } from "../db.js";
import RecipeModel from "../models/Recipe.js";

const getAllRecipes = async (req, res) => {
    const getAllRecipes = await RecipeModel.find()
    res.json(getAllRecipes)
}

const getRecipeById = async (req, res) => {
    try {
    // check if the recipeId is a valid db id
    if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
        // if recipeId is a valid db id, check if it matches the id from our db
        const findOneRecipe = await RecipeModel.findOne({ _id: req.params.recipeId})
        // if yes, send
        if (findOneRecipe) {
            res.json(findOneRecipe)
            // if no, send a non-existent error message
        } else {
            res.status(404).send("That recipe ID does not exist in our database")
        } 
        // if recipeId is not a valid db id, send error message
    } else {
        res.status(400).send("That is an invalid database ID")
    }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
}

const createRecipe = async (req, res) => {
    try {
        const { title, author, instructions, ingredients } = req.body
        const userId = req.user.userId

        const addRecipe = new RecipeModel({
            title,
            author,
            instructions,
            ingredients,
            createdBy: userId
        })

        await addRecipe.save()
        res.status(201).send(`A new recipe titled ${req.body.title} has been added to the database`)
    } catch (error) {
        console.log(error);
        res.status(422).json({message: error.message})
        
    }
}

const updateRecipeById = async (req, res) => {
    try {
        // check if the recipeId is a valid db id
        if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
            // if recipeId is a valid db id, 
            // get the recipe with that id
            const findRecipeToUpdate = await RecipeModel.findOne({ _id: req.params.recipeId });
            // if recipe doesn't exist send error message for that
            if (!findRecipeToUpdate) {
                res.status(404).send("That recipe does not exist in our database")
                // if recipe exists check if
                // the createdBy field matches the user's id in the req.user object
                // if it doesn't, send unauthorized error message
            } else if (findRecipeToUpdate.createdBy.toString() !== req.user.userId) {
                res.status(401).send("You are not authorized to update that recipe")
                // if it matches then update the body
            } else {
                const updateRecipe = await RecipeModel.updateOne({ _id: req.params.recipeId }, req.body)
                // if no update was made
                // or the req.body didn't meet schema standards
                // send error message
                if (updateRecipe.modifiedCount === 0) {
                    res.status(400).send("You either didn't make any changes or you didn't adhere to the schema")
                    // if update was successful send success message
                } else {
                    res.status(200).send("That recipe has been updated successfully by the owner")
                    }
                }
                // if recipeId is not a valid db id, send error message
        } else {
            res.status(400).send("That is an invalid database ID")
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
}

const deleteRecipeById = async (req, res) => {
    try {
        // check if the recipeId is a valid db id
        if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
            // if recipeId is a valid db id, 
            // get the recipe with that id
            const findRecipeToDelete = await RecipeModel.findOne({ _id: req.params.recipeId });
            // if recipe doesn't exist send error message for that
            if (!findRecipeToDelete) {
                res.status(404).send("That recipe does not exist in our database")
                // if recipe exists check if
                // the createdBy field matches the user's id in the req.user object
                // if it doesn't, send unauthorized error message
            } else if (findRecipeToDelete.createdBy.toString() !== req.user.userId) {
                res.status(401).send("You are not authorized to delete that recipe")
                // if it matches then delete the recipe
            } else {
                const deleteRecipe = await RecipeModel.deleteOne({ _id: req.params.recipeId }, req.body)
                // if delete was successful send success message
                if (deleteRecipe.deletedCount === 1) {
                    res.status(200).send("That recipe has been deleted successfully by the owner")
                } else {
                    res.status(400).send("Something went wrong. We couldn't delete")
                    }
                }
                // if recipeId is not a valid db id, send error message
        } else {
            res.status(400).send("That is an invalid database ID")
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
}

const getSpecificUserRecipes = async (req, res) => {
    try {
        // get the logged-in user's id
        const { userId } = req.user
        // find recipes attached to that id
        const findUserRecipes = await RecipeModel.find({ createdBy: userId})
        // .find() returns an array so we check to see if it has any documents
        // if yes, return them
        if (findUserRecipes.length > 0) {
            res.status(200).json(findUserRecipes)
            // if no, send error message
        } else {
            res.status(404).send("You have not created any recipes!")   
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
}

export { getAllRecipes, getRecipeById, createRecipe, updateRecipeById, deleteRecipeById, getSpecificUserRecipes}
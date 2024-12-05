import express from "express";
const router = express.Router()

import { getAllRecipes, getRecipeById, createRecipe, updateRecipeById, deleteRecipeById, getSpecificUserRecipes } from "../controllers/recipes-controllers.js"
import tokenValidator from "../validation-middlewares/token-validation.js"

router.get("/", getAllRecipes)

router.get("/retrieve/:recipeId", getRecipeById)

router.post("/create", tokenValidator, createRecipe)

router.put("/update/:recipeId", tokenValidator, updateRecipeById)

router.delete("/delete/:recipeId", tokenValidator, deleteRecipeById)

router.get("/user-recipes", tokenValidator, getSpecificUserRecipes)


export default router

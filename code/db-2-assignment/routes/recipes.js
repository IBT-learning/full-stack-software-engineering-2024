import express from "express";
const router = express.Router()

import { getAllRecipes, getRecipeById, createRecipe, updateRecipeById, deleteRecipeById } from "../controllers/recipes-controllers.js"

router.get("/", getAllRecipes)

router.get("/retrieve/:recipeId", getRecipeById)

router.post("/", createRecipe)

router.put("/update/:recipeId", updateRecipeById)

router.delete("/delete/:recipeId", deleteRecipeById)


export default router

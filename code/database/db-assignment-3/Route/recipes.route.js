import express from "express";
import {
  getAllRecipes,
  getOneRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipe.controller.js";

const router = express.Router();

router.get("/all", getAllRecipes);
router.get("/one", getOneRecipe);
router.post("/create", createRecipe);
router.put("/update/:docId", updateRecipe);
router.delete("/delete/:docId", deleteRecipe);

export default router;

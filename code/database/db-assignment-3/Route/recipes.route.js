import express from "express";
import {
  getAllRecipes,
  getOneUserRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipe.controller.js";
import { protectRoute } from "../middlewares/protectroute.js";

const router = express.Router();

router.get("/all", getAllRecipes);
router.get("/one/:userId", getOneUserRecipe);
router.post("/create", protectRoute, createRecipe);
router.put("/update/:docId", protectRoute, updateRecipe);
router.delete("/delete/:docId", protectRoute, deleteRecipe);

export default router;

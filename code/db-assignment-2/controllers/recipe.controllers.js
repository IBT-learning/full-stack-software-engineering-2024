import express from "express";
import { mongoose } from "../db.js";
import Recipe from "../models/recipe.model.js";

const router = express.Router();

// get all endpoint
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).send(recipes);
  } catch (error) {
    console.error(`Error in fetching data: ${error}`);
    res.status(400).json({ message: error.message });
  }
});

// getOne recipe by Id endpoint
router.get("/:docId", async (req, res) => {
  const { docId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(docId))
    return res
      .status(400)
      .json({ success: false, message: "pls provide valid id" });

  try {
    const recipe = await Recipe.findOne({ _id: docId });
    if (!recipe) {
      return res
        .status(400)
        .json({ success: false, message: "recipe not found" });
    } else {
      return res.status(200).send(recipe);
    }
  } catch (error) {
    console.error(`Error in fetching data: ${error}`);
    res.status(400).json({ message: error.message });
  }
});

// create recipe endpoint
router.post("/", async (req, res) => {
  const recipe = req.body;

  if (
    !recipe.title ||
    !recipe.author ||
    !recipe.ingredients ||
    !recipe.instructions
  )
    return res
      .status(400)
      .json({ success: false, message: "please provide all fields" });

  try {
    const newRecipe = new Recipe(recipe);
    console.log(newRecipe);
    await newRecipe.save();
    res.status(201).send({ success: true, data: newRecipe });
  } catch (error) {
    console.error(`Error in fetching data, ${error}`);
    res.status(400).json({ message: error.message });
  }
});

// updateRecipe endpoint
router.put("/:docId", async (req, res) => {
  const { docId } = req.params;
  const body = req.body;
  const options = { new: true };

  if (!mongoose.Types.ObjectId.isValid(docId)) {
    return res.status(400).json({ success: false, message: "invalid Id" });
  }

  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      { _id: docId },
      body,
      options
    );

    if (!updatedRecipe) {
      return res
        .status(400)
        .json({ success: true, message: "recipe not found" });
    } else {
      res.status(200).json({ success: true, data: updatedRecipe });
    }
  } catch (error) {
    console.error(`Server Error, ${error}`);
    res.status(500).json({ message: error.message });
  }
});

// delete recipe endpoint
router.delete("/:docId", async (req, res) => {
  const { docId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(docId || "")) {
    return res
      .status(400)
      .json({ success: false, message: "invalid Id provided" });
  }

  try {
    const deleted = await Recipe.findByIdAndDelete({ _id: docId });
    if (!deleted) {
      return res
        .status(400)
        .json({ success: false, message: "recipe not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "recipe deleted succesfully" });
  } catch (error) {
    console.error(`Server Error, ${error}`);
    res.status(500).json({ message: error.message });
  }
});

export default router;

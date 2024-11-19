import express from "express";
import { mongoose } from "../db.js";
import Recipe from "../models/recipe.model.js";

const router = express.Router;

export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).send(recipes);
  } catch (error) {
    console.log("Error in getAllrecipe controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getOneUserRecipe = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId))
    return res
      .status(400)
      .json({ success: false, message: "pls provide valid user id" });

  try {
    const recipe = await Recipe.find({ createdBy: userId });
    if (!recipe) {
      return res
        .status(404)
        .json({ success: false, message: "recipe for user not found" });
    } else {
      return res.status(200).json({ success: true, data: recipe });
    }
  } catch (error) {
    console.error(`Error in getOneUserRecipe controller: ${error}`);
    res.status(500).json({ message: error.message });
  }
};

export const createRecipe = async (req, res) => {
  const userId = req.user._id.toString();
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
    const newRecipe = new Recipe({
      title: recipe.title,
      author: recipe.author,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      createdBy: userId,
    });
    await newRecipe.save();
    res
      .status(201)
      .send({ msg: "recipe created successfully", data: newRecipe });
  } catch (error) {
    console.log("Error in createRecipe controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateRecipe = async (req, res) => {
  const userId = req.user._id.toString();
  const { docId } = req.params;
  const body = req.body;
  const options = { new: true };

  if (!mongoose.Types.ObjectId.isValid(docId)) {
    return res.status(400).json({ success: false, message: "invalid Id" });
  }

  try {
    const recipe = await Recipe.findById(docId);
    if (!recipe) {
      return res.status(404).json({ msg: "recipe not found" });
    }
    if (userId !== recipe.createdBy.toString()) {
      return res
        .status(401)
        .json({ error: "unathorised access to update recipe" });
    } else {
      const updatedRecipe = await Recipe.findByIdAndUpdate(
        { _id: docId },
        body,
        options
      );
      res.status(200).json({ success: true, data: updatedRecipe });
    }
  } catch (error) {
    console.log("Error in updateRecipe controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteRecipe = async (req, res) => {
  const userId = req.user._id.toString();
  const { docId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(docId || "")) {
    return res
      .status(400)
      .json({ success: false, message: "invalid Id provided" });
  }

  try {
    const recipe = await Recipe.findById(docId);

    if (!recipe) {
      return res
        .status(404)
        .json({ success: false, message: "recipe not found" });
    }

    if (userId !== recipe.createdBy.toString()) {
      return res
        .status(402)
        .json({ Error: "Unathorised Access to delete recipe" });
    } else {
      await Recipe.findByIdAndDelete({ _id: docId });
      return res
        .status(200)
        .json({ success: true, message: "recipe deleted succesfully" });
    }
  } catch (error) {
    console.log("Error in delete controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default router;

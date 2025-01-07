import { mongoose } from "../db.js";
import recipeModel from "../models/Recipe.js";

const getAllRecipes = async (req, res) => {
  const getAllRecipes = await recipeModel.find();
  res.json(getAllRecipes);
};

const getRecipeById = async (req, res) => {
  // check if the recipeId is a valid db id
  if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
    // if recipeId is a valid db id, check if it matches the id from our db
    const findOneRecipe = await recipeModel.findOne({
      _id: req.params.recipeId,
    });
    // if yes, send
    if (findOneRecipe) {
      res.json(findOneRecipe);
      // if no, send a non-existent error message
    } else {
      res.status(404).send("That recipe ID does not exist in our database");
    }
    // if recipeId is not a valid db id, send error message
  } else {
    res.status(404).send("That is an invalid database ID");
  }
};

const createRecipe = async (req, res) => {
  try {
    const addRecipe = new recipeModel(req.body);
    await addRecipe.save();
    res.status(201).json({
      message: `A new recipe titled ${req.body.title} has been added to the database`,
    });
  } catch (error) {
    console.log(error);
    res.status(422).json({ message: error.message });
  }
};

const updateRecipeById = async (req, res) => {
  // check if the recipeId is a valid db id
  if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
    // if recipeId is a valid db id,
    // Find the recipe to update
    const findRecipeToUpdate = await recipeModel.findOne({
      _id: req.params.recipeId,
    });

    if (!findRecipeToUpdate) {
      // if recipe does not exist, send error message
      return res.status(404).send("That recipe does not exist in our database");
    } else {
      // compare fields in req.body with the existing document

      // Object.keys(req.body) retrieves an array of all the keys (property names)
      // in the req.body object.
      // The .some() method iterates over the array of keys and checks whether
      // at least one key satisfies the condition specified in the callback function.
      // It returns true if the condition is true for at least one key, otherwise false
      // The callback function evaluates whether a specific key's value in req.body differs
      // from the corresponding value in findRecipeToUpdate
      // !findRecipeToUpdate[key] checks if findRecipeToUpdate does not have a value for
      // the current key.If findRecipeToUpdate[key] is undefined (i.e., the key doesn’t exist
      // in findRecipeToUpdate), the ! operator makes it true.
      // If the key's value does exist in findRecipeToUpdate,
      // findRecipeToUpdate[key].toString() !== req.body[key].toString()
      // compares the values of findRecipeToUpdate[key] and req.body[key] by
      // converting both to strings using .toString().
      // .toString() ensures that even if the values are of different types
      // (e.g., numbers and strings), the comparison is consistent.

      const isModified = Object.keys(req.body).some(
        (key) =>
          !findRecipeToUpdate[key] ||
          findRecipeToUpdate[key].toString() !== req.body[key].toString()
      );

      if (!isModified) {
        // No changes detected
        return res.status(400).json({
          message:
            "You either didn't make any changes or you didn't adhere to the schema",
        });
      }
    }

    // update
    const updateRecipe = await recipeModel.updateOne(
      { _id: req.params.recipeId },
      req.body
    );
    // if no changes are made send an error message
    if (updateRecipe.modifiedCount === 0) {
      res.status(400).json({ message: "You didn't make any changes" });
      // if changes occured, send a success message
    } else {
      res
        .status(200)
        .json({ message: "That recipe has been updated successfully" });
    }
    // if recipeId is not a valid db id, send error message
  } else {
    res.status(404).json({ message:  "That is an invalid database ID"});
  }
};

const deleteRecipeById = async (req, res) => {
  // check if the recipeId is a valid db id
  if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
    // if recipeId is a valid db id, check if it matches the id from our db and delete
    const deleteRecipe = await recipeModel.deleteOne({
      _id: req.params.recipeId,
    });
    // if the removal was a success, send a success message
    if (deleteRecipe.deletedCount === 1) {
      res.status(200).json({ message: "That recipe has been removed from our database" });
      // if the id was valid but doesn't exist in our db
    } else {
      res
        .status(422)
        .json(
          { message: "We couldn't delete anything, that ID doesn't exist in our database" }
        );
    }
    // if the ID is an invalid db ID, send error message
  } else {
    res.status(404).json({ message: "That is an invalid database ID" });
  }
};
export {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipeById,
  deleteRecipeById,
};

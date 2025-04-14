import { mongoose } from "../db.js";
import recipeModel from "../models/Recipe.js";

const getAllRecipes = async (req, res) => {
  const getAllRecipes = await recipeModel.find();
  res.json(getAllRecipes);
};

const getRecipeById = async (req, res) => {
  try {
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
      res.status(400).send("That is an invalid database ID");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const createRecipe = async (req, res) => {
  try {
    const addRecipe = new recipeModel(req.body);
    await addRecipe.save();
    res
      .status(201)
      .send(
        `A new recipe titled ${req.body.title} has been added to the database`
      );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const updateRecipeById = async (req, res) => {
  try {
    // check if the recipeId is a valid db id
    if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
      // if recipeId is a valid db id, check if it is an id from our db, change the body of that db ID, then update
      const updateRecipe = await recipeModel.updateOne(
        { _id: req.params.recipeId },
        req.body,
        { upsert: true }
      );
      // if ID matches, update
      if (updateRecipe.modifiedCount === 1) {
        res.status(200).send("That recipe has been updated successfully");
        // if that id doesn't exist in our db, create a new recipe with that new body---that's what upsert does
      } else if (updateRecipe.upsertedCount === 1) {
        res
          .status(201)
          .send(
            "That ID does not exist in our database, so we created a new recipe with that ID"
          );

        // if the previous doesn't match, maybe because it doesn't meet our schema standard
      } else {
        res.status(422).send("We couldn't update your recipe");
      }
      // if recipeId is not a valid db id, send error message
    } else {
      res.status(400).send("That is an invalid database ID");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteRecipeById = async (req, res) => {
  try {
    // check if the recipeId is a valid db id
    if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
      // if recipeId is a valid db id, check if it matches the id from our db and delete
      const deleteRecipe = await recipeModel.deleteOne({
        _id: req.params.recipeId,
      });
      // if the removal was a success, send a success message
      if (deleteRecipe.deletedCount === 1) {
        res.status(200).send("That recipe has been removed from our database");
        // if the id was valid but doesn't exist in our db
      } else {
        res
          .status(422)
          .send(
            "We couldn't delete anything, that ID doesn't exist in our database"
          );
      }
      // if the ID is an invalid db ID, send error message
    } else {
      res.status(400).send("That is an invalid database ID");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipeById,
  deleteRecipeById,
};

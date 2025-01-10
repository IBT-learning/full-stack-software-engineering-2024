import { mongoose } from "../db.js";
import RecipeModel from "../models/Recipe.js";

const getAllRecipes = async (req, res) => {
  const getAllRecipes = await RecipeModel.find();
  res.json(getAllRecipes);
};

const getRecipeById = async (req, res) => {
  try {
    // check if the recipeId is a valid db id
    if (mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
      // if recipeId is a valid db id, check if it matches the id from our db
      const findOneRecipe = await RecipeModel.findOne({
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
    const { title, author, instructions, ingredients } = req.body;
    const userId = req.user.userId;

    const addRecipe = new RecipeModel({
      title,
      author,
      instructions,
      ingredients,
      createdBy: userId, // the createdBy field is not included manually
      // by the user in the request body. Instead, the server automatically assigns
      // this field based on the authenticated user's details (e.g., from a JWT token or session).
      // This ensures:
      // Data integrity (users can only create resources associated with their account).
      // Simplified API requests for the user.
      // By extracting the user ID from the JWT or session, the backend guarantees that
      // the createdBy field accurately reflects the resource's creator.
    });

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
      // if recipeId is a valid db id,
      // get the recipe with that id
      const findRecipeToUpdate = await RecipeModel.findOne({
        _id: req.params.recipeId,
      });
      // if recipe doesn't exist send error message for that
      if (!findRecipeToUpdate) {
        res.status(404).send("That recipe does not exist in our database");
        // if recipe exists check if
        // the createdBy field matches the user's id in the req.user object
        // if it doesn't, send unauthorized error message
        // the value is createdBy is an object so we convert it to
        // string to ensure same type comparison
      } else if (findRecipeToUpdate.createdBy.toString() !== req.user.userId) {
        res.status(401).send("You are not authorized to update that recipe");
        // if it matches, compare fields in req.body with
        // the existing document and check for meaningful changes
      } else {
        // Object.keys(req.body) retrieves an array of all the keys (property names)
        // in the req.body object.
        // The .some() method iterates over the array of keys and checks whether
        // at least one key satisfies the condition specified in the callback function.
        // It returns true if the condition is true for at least one key, otherwise false
        // The callback function evaluates whether a specific key's value in req.body differs
        // from the corresponding value in findRecipeToUpdate
        // !findRecipeToUpdate[key] checks if findRecipeToUpdate does not have a value for
        // the current key. If findRecipeToUpdate[key] is undefined (i.e., the key doesn’t exist
        // in the object we are trying to update ie the findRecipeToUpdate), the ! operator makes it true.
        // If the key doesn't exist, it will safely return true and skip the comparison.
        // This prevents errors when comparing values in req.body with non-existent values in findRecipeToUpdate.
        // If the key's value does exist in findRecipeToUpdate,
        // findRecipeToUpdate[key].toString() !== req.body[key].toString()
        // compares the values of findRecipeToUpdate[key] and req.body[key] by
        // converting both to strings using .toString().
        // .toString() ensures that even if the values are of different types
        // (e.g., numbers and strings), the comparison is consistent.

        const isModified = Object.keys(req.body).some(
          (key) =>
            !findRecipeToUpdate[key] ||
            findRecipeToUpdate[key].toString() !== req.body[key].toString() // the aim here is
          // to check that any value in the req.body is !== to that in the recipe we are updating,
          // so we want isModified to return true
        );

        // if no changes are detected, send error message
        if (!isModified) {
          return res.status(400).json({
            message:
              "You either didn't make any changes or you didn't adhere to the schema",
          });
        }

        // update the recipe
        const updateRecipe = await RecipeModel.updateOne(
          { _id: req.params.recipeId },
          req.body
        );
        // if no changes are made send an error message
        if (updateRecipe.modifiedCount === 0) {
          res.status(400).json({ message: "You didn't make any changes" });
          // if update was successful send success message
        } else {
          res.status(200).json({
            message: "That recipe has been updated successfully by the owner",
          });
        }
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
      // if recipeId is a valid db id,
      // get the recipe with that id
      const findRecipeToDelete = await RecipeModel.findOne({
        _id: req.params.recipeId,
      });
      // if recipe doesn't exist send error message for that
      if (!findRecipeToDelete) {
        res.status(404).send("That recipe does not exist in our database");
        // if recipe exists check if
        // the createdBy field matches the user's id in the req.user object
        // if it doesn't, send unauthorized error message
      } else if (findRecipeToDelete.createdBy.toString() !== req.user.userId) {
        res.status(401).send("You are not authorized to delete that recipe");
        // if it matches then delete the recipe
      } else {
        const deleteRecipe = await RecipeModel.deleteOne(
          { _id: req.params.recipeId }
        );
        // if delete was successful send success message
        if (deleteRecipe.deletedCount === 1) {
          res
            .status(200)
            .send("That recipe has been deleted successfully by the owner");
        } else {
          res.status(400).send("Something went wrong. We couldn't delete");
        }
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

const getSpecificUserRecipes = async (req, res) => {
  try {
    // get the logged-in user's id
    const { userId } = req.user;
    // find recipes attached to that id
    const findUserRecipes = await RecipeModel.find({ createdBy: userId });
    // .find() returns an array so we check to see if it has any documents
    // if yes, return them
    if (findUserRecipes.length > 0) {
      res.status(200).json(findUserRecipes);
      // if no, send error message
    } else {
      res.status(404).send("You have not created any recipes!");
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
  getSpecificUserRecipes,
};

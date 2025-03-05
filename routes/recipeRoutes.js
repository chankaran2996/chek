// Import express module for creating a new router
const express = require("express");

// Import the recipeController
const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

// create a new router
const recipesRouter = express.Router();

// define routes
// route to create a recipe
recipesRouter.post("/", createRecipe);

// route to get all recipes
recipesRouter.get("/", getAllRecipes);

// route to get recipe by id
recipesRouter.get("/:id", getRecipeById);

// route to update recipe by id
recipesRouter.put("/:id", updateRecipe);

// route to delete recipe by id
recipesRouter.delete("/:id", deleteRecipe);

// export the router
module.exports = recipesRouter;

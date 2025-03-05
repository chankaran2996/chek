// Import recipe model
const Recipe = require("../models/recipe");

const recipeController = {
  createRecipe: async (req, res) => {
    try {
      // get the data from request body
      const { name, ingredients, instructions } = req.body;

      // create a new recipe
      const newRecipe = new Recipe({ name, ingredients, instructions });

      // save the recipe to the database
      await newRecipe.save();

      // send a response
      res.status(201).json({ message: "Recipe created successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getAllRecipes: async (req, res) => {
    try {
      // get all recipes from the database
      const recipes = await Recipe.find();
      // send a response
      res.status(201).json(recipes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getRecipeById: async (req, res) => {
    try {
      // get the recipe id from the request parameters
      const { id } = req.params;

      // get the recipe by id from the database
      const recipe = await Recipe.findById(id).select("-__v");

      // send a response
      res.status(201).json(recipe);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateRecipe: async (req, res) => {
    try {
      // get the recipe id from the request parameters
      const { id } = req.params;

      // get the data from request body
      const { name, ingredients, instructions } = req.body;

      // update the recipe by id in the database
      await Recipe.findByIdAndUpdate(id, { name, ingredients, instructions });

      // send a response
      res.status(201).json({ message: "Recipe updated successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteRecipe: async (req, res) => {
    try {
      // get the recipe id from the request parameters
      const { id } = req.params;

      // delete the recipe by id from the database
      await Recipe.findByIdAndDelete(id);

      // send a response
      res.status(201).json({ message: "Recipe deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

// Export the recipeController
module.exports = recipeController;

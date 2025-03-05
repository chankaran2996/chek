// import mongoose modules
const mongoose = require("mongoose");

// create a schema / model for recipe
const recipeSchema = new mongoose.Schema({
  name: { type: String },
  ingredients: [{ type: String }],
  instructions: { type: String },
});

// create a recipe model and export it
module.exports = mongoose.model("Recipe", recipeSchema, "recipes");

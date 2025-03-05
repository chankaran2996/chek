// import express
const express = require("express");

// Import routes
const recipesRouter = require("./routes/recipeRoutes");

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.use("/recipes", recipesRouter);

module.exports = app;

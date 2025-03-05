const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");

// start the server
app.listen(process.env.PORT,  () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => console.error("Failed to connect to MongoDB", err));

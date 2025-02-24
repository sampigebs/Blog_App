// Mongoose schema definition for the Category model, specifying the structure of category documents in the database.

const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("category", CategorySchema);

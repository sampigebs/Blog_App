// Mongoose schema definition for the Post model, specifying the structure of blog post documents with a unique and required title field.

const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
      userId:{ type: String}
    
  },
  { timestamps: true }
);

const Post = mongoose.model("post", PostSchema);
module.exports=Post

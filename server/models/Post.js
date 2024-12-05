const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema({
  author: {
    type: String,
    required: true,
    trim: true,
  },
  game: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  playersNeeded: {
    type: Number,
    required: false
  },
  status: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: new Date
  }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
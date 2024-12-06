const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat");

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
    type: String,
    required: false
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  date: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
const mongoose = require("mongoose");

const { Schema } = mongoose;

const gameSchema = new Schema({
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    platform: {
      type: Array,
      required: true,
    },
    release_year: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  const Game = mongoose.model("Game", gameSchema);
  
  module.exports = Game;
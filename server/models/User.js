const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  status: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true
  },
  xboxTag: {
    type: String,
    unique: true
  },
  psTag: {
    type: String,
    unique: true
  },
  nintendoTag: {
    type: String,
    unique: true
  },
  twitchTag: {
    type: String,
    unique: true
  },
  steamTag: {
    type: String,
    unique: true
  },
  appleTag: {
    type: String,
    unique: true
  },
  galaxyTag: {
    type: String,
    unique: true
  },
  games: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Game'
    }
  ]
});

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;

const db = require("./connection");
const { User } = require("../models");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("User", "users");

  console.log("Database cleaned");

  await User.create({
    username: "EvilKoala",
    email: "ethan.owens4@gmail.com",
    password: "password12345",
  });

  console.log("Users have been seeded!");

  process.exit();
});

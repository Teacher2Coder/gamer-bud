const db = require("./connection");
const { User, Post, Game } = require("../models");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("User", "users");
  await cleanDB("Post", "posts");

  console.log("Database cleaned");

  await User.insertMany([
    {
      username: "EvilKoala",
      password: "password12345",
      email: "EvilKoala@getMaxListeners.com",
      games: ['Call of Duty: Black Ops 6', 'Madden NFL 25']
    },
    {
      username: "EvilTiger",
      email: "Eviltiger@gmail.com",
      password: "password12345",
    },
    {
      username: "EvilCat",
      email: "EvilCat@gmail.com",
      password: "password12345",
    },
    {
      username: "EvilDuck",
      email: "EvilDuck@gmail.com",
      password: "password12345",
    },
  ])

  console.log("Users have been seeded!");

  await Post.insertMany([
    {
      author: 'EvilKoala',
      game: 'Animal Crossing: New Horizons',
      platform: 'Nintendo Switch',
      description: 'We doin hood rat shit in Animal Crossing',
      playersNeeded: '4',
    },
    {
      author: 'EvilKoala',
      game: 'Call of Duty: Black Ops 6',
      platform: 'Xbox Series S/X',
      description: 'We runnin some zombies',
      playersNeeded: '3',
    },
    {
      author: 'EvilKoala',
      game: 'Grand Theft Auto V',
      platform: 'PlayStation 5',
      description: 'Doing a heist',
      playersNeeded: '3',
    },
  ])

  console.log("Posts have been seeded!");

  process.exit();
});

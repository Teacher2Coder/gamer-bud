const { User, Post } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      const user = User.findOne({ username: username });
      return user
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
    posts: async (parent, args, context) => {
      const posts = await Post.find();
      return posts;
    },
    post: async (parent, { postId }) => {
      const post = await Post.findById(postId);
      return post;
    },
    platforms: async (parent, { platformKind }) => {
      const posts = await Post.find({ platform: platformKind });
      return posts;
    },
    gamePosts: async (parent, { gameName }) => {
      const posts = await Post.find({ game: gameName })
      return posts;
    },
    userGames: async (parent, context) => {
      const user = await User.findOne({ _id: context.user._id });
      return user;
    }
  },
  Mutation: {
    addUser: async (parent, { username, password }) => {
      const user = await User.create({ username, password });
      const token = signToken(user);

      return { token, user };
    },
    editUser: async (parent, context, { bio, xboxTag, psTag, nintendoTag, twitchTag, steamTag, appleTag, galaxyTag }) => {
      const user = await User.findOneAndUpdate(
        { _id: context.user._id }, 
        {
          bio: bio,
          xboxTag: xboxTag,
          psTag: psTag,
          nintendoTag: nintendoTag,
          twitchTag: twitchTag,
          steamTag: steamTag,
          appleTag: appleTag,
          galaxyTag: galaxyTag
        }
      )
      return user;
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addPost: async (parent, { author, game, platform, description, playersNeeded }) => {
      const post = Post.create({ author, game, platform, description, playersNeeded });
      return post;
    },
    addGame: async (parent, context, { game }) => {
      const user = await User.updateOne({ _id: context.user._id }, { $push: { games: game } });
      return user;
    },
    removeGame: async (parent, context, { game }) => {
      const user = await User.updateOne({ _id: context.user._id} , { $pull: { games: game } });
      return user;
    }
  },
};

module.exports = resolvers;

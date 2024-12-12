const { User, Post } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user.id);
        return user;
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
    userGames: async (parent) => {
      const user = await User.findOne({ _id: '6758952a969a8bf629a1a5ef' });
      return user;
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw AuthenticationError;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

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
    addGame: async (parent, { userId, game }) => {
      const user = await User.updateOne({ _id: userId }, { $push: { games: game } });
      return user;
    },
    removeGame: async (parent, { userId, game }) => {
      const user = await User.updateOne({ _id: userId} , { $pull: { games: game } });
      return user;
    }
  },
};

module.exports = resolvers;

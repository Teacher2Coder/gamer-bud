const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    status: String!
    profilePicture: String!
    games: [String!]
  }

  type Post {
    _id: ID
    author: String!
    game: String!
    platform: String!
    description: String!
    playersNeeded: String
    active: Boolean!
    date: String!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    posts: [Post]
    platforms(platformKind: String!): [Post]
    gamePosts(gameName: String!): [Post]
    post(postId: ID!): Post
    userGames: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Auth
    addPost(author: String!, game: String!, platform: String!, description: String!, playersNeeded: String!): Post
    addGame(userId: ID!, game: String!): User
    removeGame(userId: ID!, game: String!): User
  }
`;

module.exports = typeDefs;

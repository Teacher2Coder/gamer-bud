const typeDefs = `
  type User {
    _id: ID
    username: String!
    password: String!
    status: String
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
    token: ID!
    user: User
  }

  type Query {
    user(username: String!): User
    me: User
    posts: [Post]
    platforms(platformKind: String!): [Post]
    gamePosts(gameName: String!): [Post]
    post(postId: ID!): Post
    userGames: User
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addPost(author: String!, game: String!, platform: String!, description: String!, playersNeeded: String!): Post
    addGame(game: String!): User
    removeGame(game: String!): User
  }
`;

module.exports = typeDefs;

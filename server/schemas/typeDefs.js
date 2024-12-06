const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
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
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

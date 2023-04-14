const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    avatar_color: String
    quizzes: [Quiz]
  }
  type Quiz {
    _id: ID
    score: Int
    total: Int
    createdAt: String
    user_name: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    quizzes: [Quiz]
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addQuiz(score: Int!, total: Int!): User
    updateUser(avatar_color: String): User
  }
`;

module.exports = typeDefs;

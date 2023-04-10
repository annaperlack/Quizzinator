const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    quizzes: [Quiz]
  }
  type Quiz {
    score: String
    createdAt: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addQuiz(score: String!): User
  }
`;

module.exports = typeDefs;

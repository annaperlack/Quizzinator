const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Question {
    _id: ID
    name: String
    description: String
    category: [Category]
  }

  type Answer {
    _id: ID
    name: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }


  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    question:(category: ID, name: String): [Question]
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    updateCategory(name: String!): Category
  }
`;

module.exports = typeDefs;

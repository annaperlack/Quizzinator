import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      email
    }
  }
`;


export const QUERY_ME = gql`
  query me {
    me {
      _id
      email
    }
  }
`;


export const QUERY_QUIZ = gql`
  query quizzes {
    quizzes {
      _id
      score
      createdAt
      user_email
    }
  }
`;
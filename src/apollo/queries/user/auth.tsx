import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($user: LoginUserInput!) {
    login(user: $user) {
      token
      message
    }
  }
`;

export const SIGNUP = gql`
  mutation Signup($user: UserInput!) {
    signup(user: $user) {
      id
      name
      email
      slug
      createdAt
      updatedAt
    }
  }
`;

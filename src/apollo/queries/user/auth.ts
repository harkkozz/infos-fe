import { graphql } from 'gql';

export const Login = graphql(/* Grahphql */ `
  mutation Login($user: LoginUserInput!) {
    login(user: $user) {
      token
      message
    }
  }
`);

export const Signup = graphql(/*Graphql */ `
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
`);

import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($user: LoginUserInput!) {
    login(user: $user) {
      token
      message
    }
  }
`;

import { gql } from '@apollo/client';

export const getUserById = gql`
  query GetUser($getUserId: String) {
    getUser(id: $getUserId) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;

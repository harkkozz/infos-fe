import { gql } from '@apollo/client';

export const Get_User_By_ID = gql`
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

import { gql } from '@apollo/client';

export const Get_User_By_ID = gql`
  query GetUser($userId: String) {
    getUser(id: $userId) {
      id
      name
      email
      createdAt
      updatedAt
      companies {
        id
        companyName
        email
        phoneNumber
        city
        state
        createdAt
        updatedAt
      }
    }
  }
`;

export const Get_Users_Companies = gql`
  query GetUserCompanies($userId: String) {
    getUserCompanies(id: $userId) {
      id
      companyName
      email
      phoneNumber
      city
      state
      createdAt
      updatedAt
      userId
      slug
    }
  }
`;

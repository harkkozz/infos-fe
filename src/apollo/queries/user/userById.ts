import { graphql } from 'gql';

export const GetUser = graphql(/* Grahphql */ `
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
      }
    }
  }
`);

export const GetUsersCompanies = graphql(/* Grahphql */ `
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
`);

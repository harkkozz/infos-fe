import { graphql } from 'graphql-types';

export const GetCompanyById = graphql(/* Grahphql */ `
  query GetCompanyById($id: String!) {
    getCompanyById(id: $id) {
      id
      companyName
      email
      areaCode
      phoneNumber
      city
      slug
      state
      createdAt
      updatedAt
      userId
    }
  }
`);

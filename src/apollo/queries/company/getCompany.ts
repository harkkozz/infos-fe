import { graphql } from 'graphql-types';

export const SearchCompany = graphql(/* Grahphql */ `
  query SearchCompany($query: String!) {
    searchCompany(query: $query) {
      id
      companyName
      email
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

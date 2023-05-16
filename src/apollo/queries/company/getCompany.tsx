import { gql } from '@apollo/client';

export const Search_Company = gql`
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
`;

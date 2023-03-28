import { gql } from '@apollo/client';

export const Get_Company_By_Name_State_City = gql`
  query GetCompanies($query: String!) {
    getCompanyBy(query: $query) {
      id
      companyName
      email
      phoneNumber
      city
      state
      createdAt
      updatedAt
      userId
    }
  }
`;

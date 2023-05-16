import { gql } from '@apollo/client';

export const Get_Company_By_Id = gql`
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
`;

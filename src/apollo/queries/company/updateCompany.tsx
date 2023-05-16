import { gql } from '@apollo/client';

export const Edit_Company = gql`
  mutation EditCompany($id: String!, $company: CompanyInput!) {
    editCompany(id: $id, company: $company) {
      id
      companyName
      email
      phoneNumber
      city
      state
      slug
      createdAt
      updatedAt
      userId
    }
  }
`;

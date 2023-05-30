import { graphql } from 'graphql-types';

export const EditCompany = graphql(/* Grahphql */ `
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
`);

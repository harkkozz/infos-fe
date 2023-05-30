import { graphql } from 'graphql-types';

export const CreateCompany = graphql(/* Grahphql */ `
  mutation CreateCompany($company: CompanyInput!) {
    createCompany(company: $company) {
      id
    }
  }
`);

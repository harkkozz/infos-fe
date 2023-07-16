import { graphql } from 'gql';

export const CreateCompany = graphql(/* Grahphql */ `
  mutation CreateCompany($company: CompanyInput!) {
    createCompany(company: $company) {
      id
    }
  }
`);

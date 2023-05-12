import { gql } from '@apollo/client';

export const Create_Company = gql`
  mutation CreateCompany($company: CompanyInput!) {
    createCompany(company: $company) {
      id
    }
  }
`;

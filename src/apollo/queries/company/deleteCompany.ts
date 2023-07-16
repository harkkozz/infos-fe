import { graphql } from 'gql';

export const DeleteCompany = graphql(/* Grahphql */ `
  mutation DeleteCompany($id: String!) {
    deleteCompany(id: $id) {
      id
      companyName
    }
  }
`);

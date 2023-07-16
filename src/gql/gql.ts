/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

import * as types from './graphql';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  mutation CreateCompany($company: CompanyInput!) {\n    createCompany(company: $company) {\n      id\n    }\n  }\n':
    types.CreateCompanyDocument,
  '\n  mutation DeleteCompany($id: String!) {\n    deleteCompany(id: $id) {\n      id\n      companyName\n    }\n  }\n':
    types.DeleteCompanyDocument,
  '\n  query SearchCompany($query: String!) {\n    searchCompany(query: $query) {\n      id\n      companyName\n      email\n      phoneNumber\n      city\n      slug\n      state\n      createdAt\n      updatedAt\n      userId\n    }\n  }\n':
    types.SearchCompanyDocument,
  '\n  query GetCompanyById($id: String!) {\n    getCompanyById(id: $id) {\n      id\n      companyName\n      email\n      areaCode\n      phoneNumber\n      city\n      slug\n      state\n      createdAt\n      updatedAt\n      userId\n    }\n  }\n':
    types.GetCompanyByIdDocument,
  '\n  mutation EditCompany($id: String!, $company: CompanyInput!) {\n    editCompany(id: $id, company: $company) {\n      id\n      companyName\n      email\n      phoneNumber\n      city\n      state\n      slug\n      createdAt\n      updatedAt\n      userId\n    }\n  }\n':
    types.EditCompanyDocument,
  '\n  mutation Login($user: LoginUserInput!) {\n    login(user: $user) {\n      token\n      message\n    }\n  }\n':
    types.LoginDocument,
  '\n  mutation Signup($user: UserInput!) {\n    signup(user: $user) {\n      id\n      name\n      email\n      slug\n      createdAt\n      updatedAt\n    }\n  }\n':
    types.SignupDocument,
  '\n  query GetUser($userId: String) {\n    getUser(id: $userId) {\n      id\n      name\n      email\n      createdAt\n      updatedAt\n      companies {\n        id\n        companyName\n        email\n        phoneNumber\n        city\n        state\n      }\n    }\n  }\n':
    types.GetUserDocument,
  '\n  query GetUserCompanies($userId: String) {\n    getUserCompanies(id: $userId) {\n      id\n      companyName\n      email\n      phoneNumber\n      city\n      state\n      createdAt\n      updatedAt\n      userId\n      slug\n    }\n  }\n':
    types.GetUserCompaniesDocument
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateCompany($company: CompanyInput!) {\n    createCompany(company: $company) {\n      id\n    }\n  }\n'
): (typeof documents)['\n  mutation CreateCompany($company: CompanyInput!) {\n    createCompany(company: $company) {\n      id\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation DeleteCompany($id: String!) {\n    deleteCompany(id: $id) {\n      id\n      companyName\n    }\n  }\n'
): (typeof documents)['\n  mutation DeleteCompany($id: String!) {\n    deleteCompany(id: $id) {\n      id\n      companyName\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query SearchCompany($query: String!) {\n    searchCompany(query: $query) {\n      id\n      companyName\n      email\n      phoneNumber\n      city\n      slug\n      state\n      createdAt\n      updatedAt\n      userId\n    }\n  }\n'
): (typeof documents)['\n  query SearchCompany($query: String!) {\n    searchCompany(query: $query) {\n      id\n      companyName\n      email\n      phoneNumber\n      city\n      slug\n      state\n      createdAt\n      updatedAt\n      userId\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetCompanyById($id: String!) {\n    getCompanyById(id: $id) {\n      id\n      companyName\n      email\n      areaCode\n      phoneNumber\n      city\n      slug\n      state\n      createdAt\n      updatedAt\n      userId\n    }\n  }\n'
): (typeof documents)['\n  query GetCompanyById($id: String!) {\n    getCompanyById(id: $id) {\n      id\n      companyName\n      email\n      areaCode\n      phoneNumber\n      city\n      slug\n      state\n      createdAt\n      updatedAt\n      userId\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation EditCompany($id: String!, $company: CompanyInput!) {\n    editCompany(id: $id, company: $company) {\n      id\n      companyName\n      email\n      phoneNumber\n      city\n      state\n      slug\n      createdAt\n      updatedAt\n      userId\n    }\n  }\n'
): (typeof documents)['\n  mutation EditCompany($id: String!, $company: CompanyInput!) {\n    editCompany(id: $id, company: $company) {\n      id\n      companyName\n      email\n      phoneNumber\n      city\n      state\n      slug\n      createdAt\n      updatedAt\n      userId\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation Login($user: LoginUserInput!) {\n    login(user: $user) {\n      token\n      message\n    }\n  }\n'
): (typeof documents)['\n  mutation Login($user: LoginUserInput!) {\n    login(user: $user) {\n      token\n      message\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation Signup($user: UserInput!) {\n    signup(user: $user) {\n      id\n      name\n      email\n      slug\n      createdAt\n      updatedAt\n    }\n  }\n'
): (typeof documents)['\n  mutation Signup($user: UserInput!) {\n    signup(user: $user) {\n      id\n      name\n      email\n      slug\n      createdAt\n      updatedAt\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetUser($userId: String) {\n    getUser(id: $userId) {\n      id\n      name\n      email\n      createdAt\n      updatedAt\n      companies {\n        id\n        companyName\n        email\n        phoneNumber\n        city\n        state\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetUser($userId: String) {\n    getUser(id: $userId) {\n      id\n      name\n      email\n      createdAt\n      updatedAt\n      companies {\n        id\n        companyName\n        email\n        phoneNumber\n        city\n        state\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetUserCompanies($userId: String) {\n    getUserCompanies(id: $userId) {\n      id\n      companyName\n      email\n      phoneNumber\n      city\n      state\n      createdAt\n      updatedAt\n      userId\n      slug\n    }\n  }\n'
): (typeof documents)['\n  query GetUserCompanies($userId: String) {\n    getUserCompanies(id: $userId) {\n      id\n      companyName\n      email\n      phoneNumber\n      city\n      state\n      createdAt\n      updatedAt\n      userId\n      slug\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<
  infer TType,
  any
>
  ? TType
  : never;

/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Company = {
  __typename?: 'Company';
  areaCode: Scalars['String']['output'];
  city: Scalars['String']['output'];
  companyName: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  phoneNumber: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  state: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type CompanyInput = {
  areaCode: Scalars['String']['input'];
  city: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  state: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type DeletedCompany = {
  __typename?: 'DeletedCompany';
  companyName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type LoginUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCompany: Company;
  deleteCompany?: Maybe<DeletedCompany>;
  editCompany: Company;
  login?: Maybe<PayloadAuthUser>;
  signup?: Maybe<User>;
};

export type MutationCreateCompanyArgs = {
  company: CompanyInput;
};

export type MutationDeleteCompanyArgs = {
  id: Scalars['String']['input'];
};

export type MutationEditCompanyArgs = {
  company: CompanyInput;
  id: Scalars['String']['input'];
};

export type MutationLoginArgs = {
  user: LoginUserInput;
};

export type MutationSignupArgs = {
  user: UserInput;
};

export type PayloadAuthUser = {
  __typename?: 'PayloadAuthUser';
  message?: Maybe<Scalars['String']['output']>;
  token: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getCompanies: Array<Maybe<Company>>;
  getCompanyById: Company;
  getUser?: Maybe<User>;
  getUserCompanies: Array<Maybe<Company>>;
  searchCompany: Array<Maybe<Company>>;
};

export type QueryGetCompanyByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetUserArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetUserCompaniesArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type QuerySearchCompanyArgs = {
  query: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  companies?: Maybe<Array<Maybe<Company>>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type UserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateCompanyMutationVariables = Exact<{
  company: CompanyInput;
}>;

export type CreateCompanyMutation = { __typename?: 'Mutation'; createCompany: { __typename?: 'Company'; id: string } };

export type DeleteCompanyMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type DeleteCompanyMutation = {
  __typename?: 'Mutation';
  deleteCompany?: { __typename?: 'DeletedCompany'; id: string; companyName?: string | null } | null;
};

export type SearchCompanyQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;

export type SearchCompanyQuery = {
  __typename?: 'Query';
  searchCompany: Array<{
    __typename?: 'Company';
    id: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    city: string;
    slug?: string | null;
    state: string;
    createdAt?: string | null;
    updatedAt?: string | null;
    userId?: string | null;
  } | null>;
};

export type GetCompanyByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type GetCompanyByIdQuery = {
  __typename?: 'Query';
  getCompanyById: {
    __typename?: 'Company';
    id: string;
    companyName: string;
    email: string;
    areaCode: string;
    phoneNumber: string;
    city: string;
    slug?: string | null;
    state: string;
    createdAt?: string | null;
    updatedAt?: string | null;
    userId?: string | null;
  };
};

export type EditCompanyMutationVariables = Exact<{
  id: Scalars['String']['input'];
  company: CompanyInput;
}>;

export type EditCompanyMutation = {
  __typename?: 'Mutation';
  editCompany: {
    __typename?: 'Company';
    id: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    city: string;
    state: string;
    slug?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    userId?: string | null;
  };
};

export type LoginMutationVariables = Exact<{
  user: LoginUserInput;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login?: { __typename?: 'PayloadAuthUser'; token: string; message?: string | null } | null;
};

export type SignupMutationVariables = Exact<{
  user: UserInput;
}>;

export type SignupMutation = {
  __typename?: 'Mutation';
  signup?: {
    __typename?: 'User';
    id?: string | null;
    name?: string | null;
    email?: string | null;
    slug?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type GetUserQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetUserQuery = {
  __typename?: 'Query';
  getUser?: {
    __typename?: 'User';
    id?: string | null;
    name?: string | null;
    email?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    companies?: Array<{
      __typename?: 'Company';
      id: string;
      companyName: string;
      email: string;
      phoneNumber: string;
      city: string;
      state: string;
    } | null> | null;
  } | null;
};

export type GetUserCompaniesQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetUserCompaniesQuery = {
  __typename?: 'Query';
  getUserCompanies: Array<{
    __typename?: 'Company';
    id: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    city: string;
    state: string;
    createdAt?: string | null;
    updatedAt?: string | null;
    userId?: string | null;
    slug?: string | null;
  } | null>;
};

export const CreateCompanyDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateCompany' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'company' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'CompanyInput' } } }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createCompany' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'company' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'company' } }
              }
            ],
            selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }] }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<CreateCompanyMutation, CreateCompanyMutationVariables>;
export const DeleteCompanyDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteCompany' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteCompany' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'companyName' } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<DeleteCompanyMutation, DeleteCompanyMutationVariables>;
export const SearchCompanyDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SearchCompany' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'query' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'searchCompany' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'query' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'query' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'companyName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
                { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<SearchCompanyQuery, SearchCompanyQueryVariables>;
export const GetCompanyByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCompanyById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getCompanyById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'companyName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'areaCode' } },
                { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
                { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<GetCompanyByIdQuery, GetCompanyByIdQueryVariables>;
export const EditCompanyDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'EditCompany' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } }
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'company' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'CompanyInput' } } }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editCompany' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } }
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'company' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'company' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'companyName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
                { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<EditCompanyMutation, EditCompanyMutationVariables>;
export const LoginDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Login' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'user' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'LoginUserInput' } } }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'login' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'user' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'user' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'token' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const SignupDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Signup' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'user' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'UserInput' } } }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signup' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'user' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'user' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;
export const GetUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'companies' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'companyName' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetUserCompaniesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetUserCompanies' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getUserCompanies' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'companyName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
                { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<GetUserCompaniesQuery, GetUserCompaniesQueryVariables>;

export interface Companies {
  getCompanyBy: Company[];
}

export interface Company {
  id: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  slug: string;
  city: string;
  state: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  __typename: string;
}

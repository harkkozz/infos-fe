export interface Companies {
  getCompanyBy: Company[];
}

export interface Company {
  id: string;
  companyName: string;
  email: string;
  areaCode: string;
  phoneNumber: string;
  slug: string;
  city: string;
  state: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  __typename: string;
}

export interface CompanyById {
  getCompanyById: Company;
}

export interface CompanyCreateFormValues {
  companyName: string;
  email: string;
  areaCode: string;
  phoneNumber: string;
  prefix: string;
  city: string;
  state: string;
}

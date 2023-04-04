import React, { useCallback, useMemo } from 'react';

import { useLazyQuery } from '@apollo/client';
import { Get_Company_By_Name_State_City } from 'apollo/queries/company/getCompany';
import MainLayout from 'layouts/MainLayout';
import { useNavigate } from 'react-router-dom';
import { Companies } from 'types/company/types';

import AsyncTypeahead, { TypeaheadOption } from 'components/AsyncTypeahead/AsyncTypeahead';
import CustomForm from 'components/CustomForm/CustomForm';
import ErrorBoundary from 'components/ErrorBoundary';

import styles from './HomePage.module.scss';

const inputConfig = [
  {
    type: 'default',
    name: 'email',
    label: 'Email',
    placeholder: 'Insert your email',
    class: styles.inputClass
  },
  {
    name: 'password',
    placeholder: 'Insert your password',
    label: 'Password',
    type: 'password'
  }
];

const HomePage: React.FC<React.PropsWithChildren> = () => {
  const navigate = useNavigate();
  const [getCompany, { data, error, loading }] = useLazyQuery<Companies>(Get_Company_By_Name_State_City, {
    fetchPolicy: 'cache-and-network'
  });

  const handleSearch = useCallback(
    (query: string) => {
      if (query.length >= 3) {
        getCompany({ variables: { query } });
      }
    },
    [getCompany]
  );

  const handleSelect = (selected: TypeaheadOption) => {
    // TODO company details page
    navigate({ pathname: `company/${selected.value}` });
  };

  const options = useMemo(
    () =>
      data?.getCompanyBy
        ? data.getCompanyBy?.map((result) => ({
            value: result.id,
            label: result.companyName
          }))
        : [],
    [data?.getCompanyBy]
  );

  if (error) {
    return <ErrorBoundary />;
  }

  return (
    <MainLayout>
      <AsyncTypeahead
        options={options}
        isLoading={loading}
        placeholder="Search for a company"
        onInputChange={handleSearch}
        onChange={handleSelect}
      />

      <CustomForm
        formType="login"
        buttonText="Submit"
        inputConfig={inputConfig}
        onFormSubmit={(values) => console.warn(values)}
      />
    </MainLayout>
  );
};

export default HomePage;

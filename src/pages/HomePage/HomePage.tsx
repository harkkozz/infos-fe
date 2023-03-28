import { useLazyQuery } from '@apollo/client';
import MainLayout from 'layouts/MainLayout';
import React, { useCallback, useMemo } from 'react';
import { Get_Company_By_Name_State_City } from 'apollo/queries/company/getCompany';
import ErrorBoundary from 'components/ErrorBoundary';
import { Companies } from 'types/company/types';
import AsyncTypeahead, { TypeaheadOption } from 'components/AsyncTypeahead/AsyncTypeahead';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC<React.PropsWithChildren> = () => {
  const navigate = useNavigate();
  const [getCompany, { data, error, loading }] = useLazyQuery<Companies>(
    Get_Company_By_Name_State_City,
    {
      fetchPolicy: 'cache-and-network'
    }
  );

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
        ? data.getCompanyBy?.map(result => ({
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
    </MainLayout>
  );
};

export default HomePage;

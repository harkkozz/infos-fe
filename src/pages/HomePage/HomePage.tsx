import React, { useMemo } from 'react';

import { useLazyQuery } from '@apollo/client';
import { Get_Company_By_Name_State_City } from 'apollo/queries/company/getCompany';
import MainLayout from 'layouts/MainLayout';
import { useNavigate } from 'react-router-dom';
import { Companies } from 'types/company/types';
import { debounce } from 'utils/helpers';

import AsyncTypeahead, { TypeaheadOption } from 'components/AsyncTypeahead/AsyncTypeahead';
import ErrorBoundary from 'components/ErrorBoundary';

import styles from './HomePage.module.scss';

const HomePage: React.FC<React.PropsWithChildren> = () => {
  const navigate = useNavigate();

  const [getCompany, { data, error }] = useLazyQuery<Companies>(Get_Company_By_Name_State_City, {
    fetchPolicy: 'cache-and-network'
  });

  const handleSearch = async (query: string, callback) => {
    if (query.length >= 3) {
      const { data } = await getCompany({ variables: { query } });

      const options = data.getCompanyBy?.map((result) => ({
        value: result.id,
        label: result.companyName
      }));

      callback(options);
    }
  };

  const handleSelect = (selected: TypeaheadOption) => {
    // TODO company details page
    // navigate({ pathname: `company/${selected.value}` });
    console.log(selected);
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
      <div className={styles.asyncTypeaheadWrapper}>
        <AsyncTypeahead
          selectContainerClass={styles.selectContainer}
          defaultOptions={options}
          loadOptions={debounce(handleSearch, 400)}
          onChange={handleSelect}
          placeholder="Search for a company"
        />
      </div>
    </MainLayout>
  );
};

export default HomePage;

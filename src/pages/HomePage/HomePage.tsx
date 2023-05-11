import React, { useMemo } from 'react';

import { useLazyQuery } from '@apollo/client';
import { Get_Company_By_Name_State_City } from 'apollo/queries/company/getCompany';
import MainLayout from 'layouts/MainLayout';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Companies } from 'types/company/types';
import { debounce } from 'utils/helpers';

import AsyncTypeahead, { TypeaheadOption } from 'components/AsyncTypeahead/AsyncTypeahead';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

import styles from './HomePage.module.scss';

const HomePage: React.FC<React.PropsWithChildren> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [getCompany, { data, error }] = useLazyQuery<Companies>(Get_Company_By_Name_State_City, {
    fetchPolicy: 'cache-and-network'
  });

  const handleSearch = async (query: string, callback) => {
    if (query.length >= 3) {
      const { data } = await getCompany({ variables: { query } });

      const options = data.getCompanyBy?.map((result) => ({
        value: result.slug,
        label: result.companyName
      }));

      callback(options);
    }
  };

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
    <MainLayout hasFooter>
      <div className={styles.asyncTypeaheadWrapper}>
        <AsyncTypeahead
          selectContainerClass={styles.selectContainer}
          defaultOptions={options}
          loadOptions={debounce(handleSearch, 400)}
          onChange={handleSelect}
          placeholder={t('searchCompany')}
        />
      </div>
    </MainLayout>
  );
};

export default HomePage;

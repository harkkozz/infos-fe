import React, { useMemo } from 'react';

import { useLazyQuery } from '@apollo/client';
import { SearchCompany } from 'apollo/queries/company/getCompany';
import MainLayout from 'layouts/MainLayout';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'utils/helpers';

import styles from 'pages/Home/Home.module.scss';

import AsyncTypeahead, { TypeaheadOption } from 'components/AsyncTypeahead';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [getCompany, { data, error }] = useLazyQuery(SearchCompany, {
    fetchPolicy: 'cache-and-network'
  });

  const handleSearch = async (query: string, callback: (args: any) => void) => {
    if (query.length >= 3) {
      const { data } = await getCompany({ variables: { query } });

      const options = data.searchCompany.map((result) => ({
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
      data?.searchCompany
        ? data.searchCompany?.map((result) => ({
            value: result.id,
            label: result.companyName
          }))
        : [],
    [data?.searchCompany]
  );

  if (error) {
    return <h1>Error</h1>;
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

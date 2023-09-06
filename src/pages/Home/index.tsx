import React, { useMemo } from 'react';

import { useLazyQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { SearchCompany } from 'apollo/queries/company/getCompany';
import AsyncTypeahead, { TypeaheadOption } from 'components/AsyncTypeahead';
import MainLayout from 'layouts/MainLayout';
import { debounce } from 'utils/helpers';

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
    <MainLayout>
      <AsyncTypeahead
        defaultOptions={options}
        loadOptions={debounce(handleSearch, 400)}
        onChange={handleSelect}
        placeholder={t('translation:searchCompany')}
      />
    </MainLayout>
  );
};

export default HomePage;

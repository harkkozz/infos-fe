import React, { useCallback, useMemo } from 'react';

import { useLazyQuery } from '@apollo/client';
import { Button } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { Get_Company_By_Name_State_City } from 'apollo/queries/company/getCompany';
import MainLayout from 'layouts/MainLayout';
import { useNavigate } from 'react-router-dom';
import { Companies } from 'types/company/types';

import AsyncTypeahead, { TypeaheadOption } from 'components/AsyncTypeahead/AsyncTypeahead';
import CustomForm from 'components/CustomForm/CustomForm';
import CustomModal from 'components/CustomModal/CustomModal';
import ErrorBoundary from 'components/ErrorBoundary';

import styles from './HomePage.module.scss';
import { inputConfig } from './utils';

const HomePage: React.FC<React.PropsWithChildren> = () => {
  const [form] = useForm();
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
          options={options}
          isLoading={loading}
          placeholder="Search for a company"
          onInputChange={handleSearch}
          onChange={handleSelect}
        />
      </div>

      <CustomModal
        modalType="LOGIN"
        customFooter={[
          <Button key={'submit'} onClick={() => form.submit()}>
            Login
          </Button>
        ]}
      >
        <CustomForm
          formType="login"
          buttonText="Submit"
          inputConfig={inputConfig(styles)}
          onFormSubmit={(values) => console.warn(values)}
        />
      </CustomModal>
    </MainLayout>
  );
};

export default HomePage;

import React from 'react';

import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';

import { GetCompanyById } from 'apollo/queries/company/getCompanyById';
import Spinner from 'components/Spinner';
import MainLayout from 'layouts/MainLayout';

import styles from './Profile.module.scss';

const CompanyProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, loading, error } = useQuery(GetCompanyById, { variables: { id } });

  const company = data?.getCompanyById;

  if (error) {
    return (
      <MainLayout>
        <h1>Error</h1>
      </MainLayout>
    );
  }

  if (loading) {
    return (
      <MainLayout>
        <Spinner />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1>{company.companyName}</h1>
      <div className={styles.companyInfoContainer}>
        <div className={styles.companyBox}>
          <h2>Contact info</h2>
          {company.phoneNumber}
          {company.email}
        </div>
        <div className={styles.companyBox}>
          <h2>Location</h2>
          <div>{company.state}</div>
          <div>{company.city}</div>
          <div>{company.areaCode}</div>
        </div>
      </div>
    </MainLayout>
  );
};
export default CompanyProfile;

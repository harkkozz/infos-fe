import React, { useMemo } from 'react';

import { useQuery } from '@apollo/client';
import { Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Get_Users_Companies } from 'apollo/queries/user/userById';
import MainLayout from 'layouts/MainLayout';
import { Link } from 'react-router-dom';
import { Company } from 'types/company/types';

import { useUserStorage } from 'store/user';

import styles from 'pages/User/Profile/Profile.module.scss';

import CustomTable from 'components/CustomTable/CustomTable';

const UserProfile = () => {
  const { user } = useUserStorage();

  const { data, loading, error } = useQuery(Get_Users_Companies, { variables: { userId: user.id } });

  const columns: ColumnsType<any> = useMemo(
    () => [
      {
        title: 'Name',
        dataIndex: 'companyName',
        key: 'companyName',
        render: (text) => <a>{text}</a>,
        fixed: 'left'
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
      },
      {
        title: 'Phone number',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber'
      },
      {
        title: 'City',
        dataIndex: 'city',
        key: 'city'
      },
      {
        title: 'State',
        dataIndex: 'state',
        key: 'state'
      },
      {
        key: 'action',
        width: 200,
        render: (_, record) => {
          return (
            <div className={styles.tableActionCell}>
              <Link to={`/company/${record.slug}`}>View {record.name}</Link>
              <Link to={`/company/${record.slug}/edit/${record.id}`}>Edit {record.name}</Link>
              <Button onClick={() => console.log(record.id)}>Delete</Button>
            </div>
          );
        }
      }
    ],
    []
  );

  const companies: [Company] = useMemo(() => data?.getUserCompanies, [data?.getUserCompanies]);

  if (error) {
    return (
      <MainLayout>
        <h1>Error</h1>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className={styles.userProfile}>
        <h2>My companies</h2>
        {!loading && (
          <CustomTable
            data={companies.map((c) => ({
              ...c,
              key: c.id
            }))}
            columns={columns}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default UserProfile;

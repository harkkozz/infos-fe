import React, { useMemo, useState } from 'react';

import { useQuery } from '@apollo/client';
import TrashIcon from '@iconscout/react-unicons/icons/uil-trash-alt';
import { Button, Modal } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { GetUsersCompanies } from 'apollo/queries/user/userById';
import MainLayout from 'layouts/MainLayout';
import { Link, useNavigate } from 'react-router-dom';
import type { Company } from 'utils/types/company';

import { useUserStorage } from 'store/user';

import styles from 'pages/User/Profile/Profile.module.scss';

import CustomTable from 'components/CustomTable';

const UserProfile: React.FC = () => {
  const { user } = useUserStorage();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Partial<Company>>({});

  const { data, loading, error } = useQuery(GetUsersCompanies, { variables: { userId: user.id } });

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
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
              <div className={styles.trashIconWrapper}>
                <TrashIcon
                  onClick={() => {
                    setSelectedCompany(record);
                    handleOpenModal();
                  }}
                />
              </div>
            </div>
          );
        }
      }
    ],
    []
  );

  const companies = useMemo(() => data?.getUserCompanies, [data?.getUserCompanies]);

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
        <Button className={styles.addNewCompanyButton} onClick={() => navigate('/company/add-new')}>
          Add new company
        </Button>
        {!loading && (
          <CustomTable
            data={companies.map((c) => ({
              ...c,
              key: c.id
            }))}
            columns={columns}
          />
        )}
        <Modal
          title="Confirmation dialog"
          open={openModal}
          onOk={handleCloseModal}
          confirmLoading={false}
          onCancel={handleCloseModal}
        >
          <p>
            Are you sure you want to delete <b>{selectedCompany.companyName}</b>?
          </p>
        </Modal>
      </div>
    </MainLayout>
  );
};

export default UserProfile;

import React from 'react';

import { useMutation } from '@apollo/client';
import { Col, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { CreateCompany } from 'apollo/queries/company/addNewCompany';
import MainLayout from 'layouts/MainLayout';
import { toast } from 'react-toastify';
import { CompanyCreateFormValues } from 'utils/types/company';

import { useUserStorage } from 'store/user';

import styles from 'pages/Company/AddNew/AddNew.module.scss';

import CustomForm from 'components/CustomForm';

import { inputConfig } from './inputConfig';

const AddNewCompany: React.FC = () => {
  const { user } = useUserStorage();
  const [form] = useForm();
  const [handleCreateNewCompany] = useMutation(CreateCompany);

  const handleOnFinish = async ({
    companyName,
    city,
    email,
    areaCode,
    phoneNumber,
    state
  }: CompanyCreateFormValues) => {
    try {
      await handleCreateNewCompany({
        errorPolicy: 'all',
        variables: {
          company: { companyName, city, email, areaCode, phoneNumber, state, userId: user.id }
        }
      });
      toast.success('Company created');
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
    }
  };

  return (
    <MainLayout>
      <h1 className={styles.heading}>Add new company</h1>
      <Row justify={'center'}>
        <Col xs={22} md={20} lg={10}>
          <CustomForm
            form={form}
            name="add-new-company"
            initValues={{ areaCode: '381' }}
            layout="vertical"
            size="large"
            onFinish={handleOnFinish}
            inputFields={inputConfig}
            submitButtonText="Submit"
          />
        </Col>
      </Row>
    </MainLayout>
  );
};

export default AddNewCompany;

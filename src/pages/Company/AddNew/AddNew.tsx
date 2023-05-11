import React from 'react';

import { useMutation } from '@apollo/client';
import { Button, Col, Form, Row } from 'antd';
import { Create_Company } from 'apollo/queries/company/addNewCompany';
import MainLayout from 'layouts/MainLayout';

import { useUserStorage } from 'store/user';

import styles from 'pages/Company/AddNew/AddNew.module.scss';

import CustomInput from 'components/CustomInput/CustomInput';

const AddNewCompany = () => {
  const { user } = useUserStorage();
  const [handleCreateNewCompany] = useMutation(Create_Company);

  return (
    <MainLayout>
      <h1 className={styles.heading}>Add new company</h1>
      <Row justify={'center'}>
        <Col xs={22} md={20} lg={10}>
          <Form
            layout="vertical"
            size="large"
            onFinish={async (values) =>
              await handleCreateNewCompany({ variables: { company: { ...values, userId: user.id } } })
            }
          >
            <Form.Item name={'companyName'} label={'Company name'}>
              <CustomInput type="default" placeholder={'Company name'} />
            </Form.Item>
            <Form.Item name={'state'} label={'State'}>
              <CustomInput type="default" placeholder={'State'} />
            </Form.Item>
            <Form.Item name={'city'} label={'City'}>
              <CustomInput type="default" placeholder={'City'} />
            </Form.Item>
            <Form.Item name={'email'} label={'Email'}>
              <CustomInput type="default" placeholder={'Email'} />
            </Form.Item>
            <Form.Item name={'phoneNumber'} label={'Phone number'}>
              <CustomInput type="default" placeholder={'Phone number'} />
            </Form.Item>

            <Form.Item>
              <Button size="large" type="default" htmlType="submit">
                Add
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default AddNewCompany;

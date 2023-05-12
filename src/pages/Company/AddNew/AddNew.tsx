import React from 'react';

import { useMutation } from '@apollo/client';
import { Button, Col, Form, Row, Select } from 'antd';
import { Create_Company } from 'apollo/queries/company/addNewCompany';
import MainLayout from 'layouts/MainLayout';
import { toast } from 'react-toastify';

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
            onFinish={async (values) => {
              try {
                await handleCreateNewCompany({
                  variables: {
                    company: { ...values, phoneNumber: `${values.prefix}${values.phoneNumber}`, userId: user.id }
                  }
                });
                toast.success('Company created');
              } catch (error) {
                if (error instanceof Error) toast.error(error.cause as string);
              }
            }}
          >
            <Form.Item
              rules={[
                { type: 'string' },
                {
                  required: true,
                  message: 'Company name field is required'
                }
              ]}
              name={'companyName'}
              label={'Company name'}
            >
              <CustomInput type="default" placeholder={'Company name'} />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'State field is required'
                }
              ]}
              name={'state'}
              label={'State'}
            >
              <CustomInput type="default" placeholder={'State'} />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'City field is required'
                }
              ]}
              name={'city'}
              label={'City'}
            >
              <CustomInput type="default" placeholder={'City'} />
            </Form.Item>
            <Form.Item
              rules={[
                { type: 'email', message: 'Not valid input email' },
                {
                  required: true,
                  message: 'Email field is required'
                }
              ]}
              name={'email'}
              label={'Email'}
            >
              <CustomInput type="default" placeholder={'Email'} />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Phone number field is required'
                }
              ]}
              name={'phoneNumber'}
              label={'Phone number'}
            >
              <CustomInput
                addonBefore={
                  <Form.Item noStyle>
                    <Select style={{ width: 90 }} defaultValue={381}>
                      <Select.Option value="381">+381</Select.Option>
                      <Select.Option value="382">+382</Select.Option>
                    </Select>
                  </Form.Item>
                }
                type="default"
                placeholder={'Phone number'}
              />
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

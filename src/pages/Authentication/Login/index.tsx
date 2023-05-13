import React from 'react';

import { useMutation } from '@apollo/client';
import { Col, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { LOGIN } from 'apollo/queries/user/auth';
import { ReactComponent as LoginImage } from 'assets/icons/login.svg';
import AuthLayout from 'layouts/AuthLayout';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { UserLoginPayload } from 'utils/types/user';

import { useUserStorage } from 'store/user';

import styles from 'pages/Authentication/Authentication.module.scss';

import CustomForm from 'components/CustomForm';

import { inputConfig } from './inputConfig';

const Login: React.FC = () => {
  const { setUser } = useUserStorage();
  const [form] = useForm();
  const navigate = useNavigate();

  const [handleLogin] = useMutation(LOGIN);

  const onFormSubmit = async ({ email, password }: UserLoginPayload) => {
    try {
      await handleLogin({
        variables: { user: { email, password } },
        onCompleted: (data) => {
          setUser(data?.login?.token);
        }
      });

      toast.success('User created successfully');
      navigate({ pathname: '/' });
    } catch (error) {
      if (error instanceof Error) toast.error(error.cause as string);
    }
  };

  return (
    <AuthLayout>
      <LoginImage className={styles.authIcon} />
      <div className={styles.formClass}>
        <Row justify={'center'}>
          <Col xs={22} md={20}>
            <CustomForm
              form={form}
              name="login"
              layout="vertical"
              size="large"
              onFinish={onFormSubmit}
              inputFields={inputConfig}
              submitButtonText="Submit"
              submitButtonClass={styles.submitButton}
            />
          </Col>
        </Row>
      </div>
    </AuthLayout>
  );
};

export default Login;

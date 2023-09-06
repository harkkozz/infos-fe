import React from 'react';

import { useMutation } from '@apollo/client';
import { Col, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { Login as LoginGQL } from 'apollo/queries/user/auth';
import { ReactComponent as LoginImage } from 'assets/icons/login.svg';
import CustomForm from 'components/CustomForm';
import AuthLayout from 'layouts/AuthLayout';
import styles from 'pages/Authentication/Authentication.module.scss';
import { useUserStorage } from 'store/user';
import { UserLoginPayload } from 'utils/types/user';

import { inputConfig } from './inputConfig';

const Login: React.FC = () => {
  const { setUser } = useUserStorage();
  const [form] = useForm();
  const navigate = useNavigate();

  const [handleLogin] = useMutation(LoginGQL);

  const onFormSubmit = async ({ email, password }: UserLoginPayload) => {
    await handleLogin({
      variables: { user: { email, password } },
      onCompleted: (data) => {
        setUser(data?.login?.token);

        navigate({ pathname: '/' });
      },
      onError: ({ networkError }: any) => {
        toast.error(networkError.result?.errors[0]?.message);
      }
    });
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

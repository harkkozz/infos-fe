import React from 'react';

import { useMutation } from '@apollo/client';
import { Col, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { Signup as SignupGQL } from 'apollo/queries/user/auth';
import { ReactComponent as SignupImage } from 'assets/icons/sign_up.svg';
import CustomForm from 'components/CustomForm';
import AuthLayout from 'layouts/AuthLayout';
import styles from 'pages/Authentication/Authentication.module.scss';
import { UserSignupPayload } from 'utils/types/user';

import { inputConfig } from './inputConfig';

const Signup: React.FC = () => {
  const [form] = useForm();
  const navigate = useNavigate();

  const [handleSignup] = useMutation(SignupGQL);

  const onFormSubmit = async ({ name, email, password }: UserSignupPayload) => {
    try {
      await handleSignup({
        variables: { user: { name, email, password } }
      });

      toast.success('User created successfully');
      navigate({ pathname: '/login' });
    } catch (error) {
      if (error instanceof Error) toast.error(error.cause as string);
    }
  };

  return (
    <AuthLayout>
      <SignupImage className={styles.authIcon} />
      <div className={styles.formClass}>
        <Row justify={'center'}>
          <Col xs={22} md={20}>
            <CustomForm
              form={form}
              name="signup"
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

export default Signup;

import React from 'react';

import { useMutation } from '@apollo/client';
import HomeIcon from '@iconscout/react-unicons/icons/uil-home';
import { Button, Col, Form, Row } from 'antd';
import { LOGIN } from 'apollo/queries/user/login';
import { ReactComponent as LoginImage } from 'assets/icons/undraw_login_re_4vu2.svg';
import { useNavigate } from 'react-router';

import { useUserStorage } from 'store/user';

import CustomInput from 'components/CustomInput/CustomInput';

import styles from './Login.module.scss';
import { inputConfig } from './utils';

const Login = () => {
  const { setUser } = useUserStorage();
  const navigate = useNavigate();

  const [handleLogin] = useMutation(LOGIN);

  const onFormSubmit = async (values) => {
    await handleLogin({
      variables: { user: values },
      onCompleted: (data) => {
        setUser(data?.login?.token);
      }
    });

    navigate({ pathname: '/' });
  };

  return (
    <>
      <div className={styles.homeButtonWrapper}>
        <Button type="link" onClick={() => navigate({ pathname: '/' })}>
          <HomeIcon size="30" color="#1677be" />
        </Button>
      </div>

      <div className={styles.login}>
        <div className={styles.formWrapper}>
          <LoginImage className={styles.loginIcon} />
          <div className={styles.formClass}>
            <Row justify={'center'}>
              <Col xs={22} md={20}>
                <Form layout="vertical" onFinish={onFormSubmit} size="large">
                  {inputConfig.map((input) => (
                    <Form.Item
                      key={`login-${input.name}`}
                      name={input.name}
                      label={input.label}
                      rules={[
                        {
                          min: 3
                        },
                        {
                          required: true,
                          message: `${input.label} field is required`
                        }
                      ]}
                    >
                      <CustomInput type={input.type} inputWrapperClass={input.class} placeholder={input.placeholder} />
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button type="default" htmlType="submit" className={styles.submitButton}>
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

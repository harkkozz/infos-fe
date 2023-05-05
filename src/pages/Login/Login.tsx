import React from 'react';

import { useMutation } from '@apollo/client';
import HomeIcon from '@iconscout/react-unicons/icons/uil-home';
import { Button } from 'antd';
import { LOGIN } from 'apollo/queries/user/login';
import { ReactComponent as LoginIcon } from 'assets/icons/undraw_login_re_4vu2.svg';
import { useNavigate } from 'react-router';

import { useUserStorage } from 'store/user';

import CustomForm from 'components/CustomForm/CustomForm';

import styles from './Login.module.scss';
import { inputConfig } from './utils';

const Login = () => {
  const { setUser } = useUserStorage();
  const navigate = useNavigate();

  const [handleLogin] = useMutation(LOGIN);

  return (
    <>
      <div className={styles.homeButtonWrapper}>
        <Button type="link" onClick={() => navigate({ pathname: '/' })}>
          <HomeIcon size="30" color="#1677be" />
        </Button>
      </div>

      <div className={styles.login}>
        <div className={styles.formWrapper}>
          <LoginIcon className={styles.loginIcon} />
          <CustomForm
            formType="login"
            formWrapperClass={styles.formClass}
            buttonText="Submit"
            inputConfig={inputConfig}
            hasSubmitButton
            onFormSubmit={async (values) => {
              await handleLogin({
                variables: { user: values },
                onCompleted: (data) => {
                  setUser(data?.login?.token);
                }
              });

              navigate({ pathname: '/' });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Login;

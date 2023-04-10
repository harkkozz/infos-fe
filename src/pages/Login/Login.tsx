import React from 'react';

import { ReactComponent as LoginIcon } from 'assets/icons/undraw_login_re_4vu2.svg';

import CustomForm from 'components/CustomForm/CustomForm';

import styles from './Login.module.scss';
import { inputConfig } from './utils';

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.formWrapper}>
        <LoginIcon className={styles.loginIcon} />
        <CustomForm
          formType="login"
          formWrapperClass={styles.formClass}
          buttonText="Submit"
          inputConfig={inputConfig}
          hasSubmitButton
          onFormSubmit={(values) => console.log(values)}
        />
      </div>
    </div>
  );
};

export default Login;

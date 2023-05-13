import React, { PropsWithChildren } from 'react';

import HomeIcon from '@iconscout/react-unicons/icons/uil-home';
import { Button } from 'antd';
import { useNavigate } from 'react-router';

import styles from './AuthLayout.module.scss';

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.homeButtonWrapper}>
        <Button type="link" onClick={() => navigate({ pathname: '/' })}>
          <HomeIcon size="30" color="#1677be" />
        </Button>
      </div>

      <div className={styles.auth}>
        <div className={styles.formWrapper}>{children}</div>
      </div>
    </>
  );
};

export default AuthLayout;

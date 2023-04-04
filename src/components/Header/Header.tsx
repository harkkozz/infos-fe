import React from 'react';

import { Button, Layout } from 'antd';
import { ReactComponent as Logo } from 'assets/icons/vite.svg';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <Layout.Header className={styles.header}>
      <div className={styles.headerContent}>
        <div>
          <Logo /> Infos
        </div>
        <div className={styles.headerContentActions}>
          <Button>Login</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;

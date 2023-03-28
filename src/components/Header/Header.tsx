import React from 'react';
import { Layout, Button } from 'antd';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from 'icons/vite.svg';

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

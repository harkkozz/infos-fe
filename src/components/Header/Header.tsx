import React from 'react';

import { Button, Layout } from 'antd';
import { ReactComponent as Logo } from 'assets/icons/vite.svg';

import styles from './Header.module.scss';

interface IProps {
  handleOnLoginClick: () => void;
}

const Header: React.FC<IProps> = ({ handleOnLoginClick }) => {
  return (
    <Layout.Header className={styles.header}>
      <div className={styles.headerContent}>
        <div>
          <Logo /> Infos
        </div>
        <div className={styles.headerContentActions}>
          <Button onClick={handleOnLoginClick}>Login</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;

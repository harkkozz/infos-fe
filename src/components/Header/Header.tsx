import React from 'react';

import { Button, Layout } from 'antd';
import { ReactComponent as Logo } from 'assets/icons/vite.svg';
import { useTranslation } from 'react-i18next';

import styles from './Header.module.scss';

interface IProps {
  handleOnLoginClick: () => void;
  handleOnSignupClick: () => void;
}

const Header: React.FC<IProps> = ({ handleOnLoginClick, handleOnSignupClick }) => {
  const { t, i18n } = useTranslation();

  return (
    <Layout.Header className={styles.header}>
      <div className={styles.headerContent}>
        <div>
          <Logo height={30} width={40} />
        </div>
        <div className={styles.headerContentActions}>
          <Button onClick={handleOnLoginClick}>{t('login')}</Button>
          <Button onClick={handleOnSignupClick}>{t('signup')}</Button>
        </div>
        <Button onClick={() => i18n.changeLanguage('en')}>Change lang</Button>
      </div>
    </Layout.Header>
  );
};

export default Header;

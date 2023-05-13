import React from 'react';

import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';

import styles from './MainLayout.module.scss';

const { Content } = Layout;

interface Props {
  hasFooter?: boolean;
}
const MainLayout: React.FC<React.PropsWithChildren<Props>> = ({ children, hasFooter = false }) => {
  const navigate = useNavigate();

  return (
    <Layout className={styles.layout}>
      <Header handleOnLoginClick={() => navigate('/login')} handleOnSignupClick={() => navigate('/signup')} />
      <Content className={styles.siteLayoutContent}>{children}</Content>
      {hasFooter && <Footer />}
    </Layout>
  );
};

export default MainLayout;

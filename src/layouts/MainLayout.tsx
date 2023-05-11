import React from 'react';

import { Layout, theme } from 'antd';
import { useNavigate } from 'react-router-dom';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import styles from './MainLayout.module.scss';

const { Content } = Layout;

interface Props {
  hasFooter?: boolean;
}
const MainLayout: React.FC<React.PropsWithChildren<Props>> = ({ children, hasFooter = false }) => {
  const navigate = useNavigate();

  const {
    token: { colorBgContainer }
  } = theme.useToken();
  return (
    <Layout className={styles.layout}>
      <Header handleOnLoginClick={() => navigate('/login')} handleOnSignupClick={() => navigate('/signup')} />
      <Content style={{ backgroundColor: colorBgContainer }}>
        <div className={styles.siteLayoutContent}>{children}</div>
      </Content>
      {hasFooter && <Footer />}
    </Layout>
  );
};

export default MainLayout;

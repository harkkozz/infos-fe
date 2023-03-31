import React from 'react';

import { Layout, theme } from 'antd';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import styles from './MainLayout.module.scss';

const { Content } = Layout;

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  return (
    <Layout className={styles.layout}>
      <Header />
      <Content style={{ backgroundColor: colorBgContainer }}>
        <div className={styles.siteLayoutContent}>{children}</div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;

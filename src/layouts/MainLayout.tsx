import React from 'react';
import styles from './MainLayout.module.scss';
import { Layout, theme } from 'antd';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

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

import React from 'react';

import { Layout, theme } from 'antd';

import { useModalStore } from 'store/modal';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import styles from './MainLayout.module.scss';

const { Content } = Layout;

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const onModalOpen = useModalStore((state) => state.open);

  const {
    token: { colorBgContainer }
  } = theme.useToken();
  return (
    <Layout className={styles.layout}>
      <Header handleOnLoginClick={() => onModalOpen('LOGIN')} />
      <Content style={{ backgroundColor: colorBgContainer }}>
        <div className={styles.siteLayoutContent}>{children}</div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;

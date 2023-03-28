import React from 'react';
import { Layout } from 'antd';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const date = new Date();

  return (
    <Layout.Footer className={styles.footer}>Infos &copy; {date.getUTCFullYear()}</Layout.Footer>
  );
};

export default Footer;

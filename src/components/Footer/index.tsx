import React from 'react';

import { Layout } from 'antd';

import { ReactComponent as BuildingsOneImage } from 'assets/icons/best_place.svg';
import { ReactComponent as BuildingsTwoImage } from 'assets/icons/city_life.svg';
import { ReactComponent as BuildingsThreeImage } from 'assets/icons/town.svg';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const date = new Date();

  return (
    <Layout.Footer className={styles.footer}>
      <div className={styles.footerImagesContainer}>
        <BuildingsOneImage className={styles.buildings} />
        <BuildingsTwoImage className={styles.buildings} />
        <BuildingsThreeImage className={styles.buildings} />
      </div>
      <p>Infos &copy; {date.getUTCFullYear()}</p>
    </Layout.Footer>
  );
};

export default Footer;

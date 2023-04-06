import React from 'react';

import { Layout } from 'antd';
import { ReactComponent as BuildingsOneImage } from 'assets/icons/undraw_best_place_re_lne9.svg';
import { ReactComponent as BuildingsTwoImage } from 'assets/icons/undraw_city_life_gnpr.svg';
import { ReactComponent as BuildingsThreeImage } from 'assets/icons/undraw_town_re_2ng5.svg';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const date = new Date();

  return (
    <div>
      <div className={styles.footerImagesContainer}>
        <BuildingsOneImage className={styles.buildings} />
        <BuildingsTwoImage className={styles.buildings} />
        <BuildingsThreeImage className={styles.buildings} />
      </div>
      <Layout.Footer className={styles.footer}>Infos &copy; {date.getUTCFullYear()}</Layout.Footer>
    </div>
  );
};

export default Footer;

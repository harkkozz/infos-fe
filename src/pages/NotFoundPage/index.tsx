import React from 'react';

import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as NotFound } from 'assets/icons/page_not_found.svg';

import styles from './NotFoundPage.module.scss';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notFoundPage}>
      <h1>Page not found</h1>
      <NotFound className={styles.notFoundIcon} />

      <div className={styles.actions}>
        <Button size="large" onClick={() => navigate(-1)}>
          Go back
        </Button>
        <Button size="large" onClick={() => navigate({ pathname: '/' })}>
          Go home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;

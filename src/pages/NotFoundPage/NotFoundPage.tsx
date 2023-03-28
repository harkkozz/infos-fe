import React from 'react';
import { ReactComponent as NotFound } from 'assets/icons/page_not_found.svg';
import styles from './NotFoundPage.module.scss';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notFoundPage}>
      <h1>Page not found</h1>
      <NotFound />
      <Button size="large" onClick={() => navigate(-1)}>
        Go back
      </Button>
    </div>
  );
};

export default NotFoundPage;

import { useQuery } from '@apollo/client';
import { getUserById } from 'apollo/queries/user/userById';
import React from 'react';

import styles from './HomePage.module.scss';

const HomePage: React.FC<React.PropsWithChildren> = () => {
  const USER_BY_ID_VARS = {
    variables: {
      getUserId: '3e645548-5d9b-4273-b2c4-6bc9bb64a431'
    }
  };

  const { data, error, loading } = useQuery(getUserById, USER_BY_ID_VARS);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return <div className={styles.homePage}>{data.getUser.email}</div>;
};

export default HomePage;

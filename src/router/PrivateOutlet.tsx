import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { useUserStorage } from 'store/user';

import { HOME_PAGE } from './constants';

const PrivateOutlet: React.FC = () => {
  const { token } = useUserStorage();

  return token ? <Outlet /> : <Navigate to={HOME_PAGE} replace />;
};

export default PrivateOutlet;

import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { HOME_PAGE } from './constants';

const PrivateOutlet: React.FC = () => {
  const isAuthenticated = false;

  return isAuthenticated ? <Outlet /> : <Navigate to={HOME_PAGE} replace />;
};

export default PrivateOutlet;

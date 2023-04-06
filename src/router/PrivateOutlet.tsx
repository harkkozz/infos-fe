import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { HOME_PAGE } from './constants';

const PrivateRoute: React.FC = () => {
  const isAuthenticated = false;

  console.log(isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to={HOME_PAGE} replace />;
};

export default PrivateRoute;

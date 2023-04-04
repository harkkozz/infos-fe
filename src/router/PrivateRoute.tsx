import React, { ReactNode } from 'react';

import { Navigate, Route, RouteProps } from 'react-router-dom';

import { HOME_PAGE } from './constants';

type IProps = RouteProps & {
  element: ReactNode;
  isAuthenticated: boolean;
};

const PrivateRoute: React.FC<IProps> = ({ element, isAuthenticated, ...rest }) => {
  return isAuthenticated ? <Route {...rest} element={element} /> : <Navigate to={HOME_PAGE} replace />;
};

export default PrivateRoute;

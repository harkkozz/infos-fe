import React from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';

import { HOME_PAGE } from 'router/constants';
import PrivateRoute from 'router/PrivateOutlet';

import HomePage from 'pages/HomePage/HomePage';
import Login from 'pages/Login/Login';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import Signup from 'pages/Signup/Signup';

import ErrorBoundary from 'components/ErrorBoundary';

const CompanyDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      Company details
      <button onClick={() => navigate({ pathname: 'edit' })}>Edit</button>
    </div>
  );
};
const CompanyEdit = () => <div>Company Edit</div>;

const MainRouter: React.FC<React.PropsWithChildren> = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<HomePage />} errorElement={<ErrorBoundary />} path={HOME_PAGE} />
      <Route path="company/:id" element={<CompanyDetails />}>
        <Route element={<PrivateRoute />}>
          <Route path="edit" element={<CompanyEdit />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default MainRouter;

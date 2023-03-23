import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { HOME_PAGE } from 'router/constants';

import HomePage from 'pages/HomePage/HomePage';

import ErrorBoundary from 'components/ErrorBoundary';

const MainRouter: React.FC<React.PropsWithChildren> = () => {
  return (
    <Routes>
      <Route element={<HomePage />} errorElement={<ErrorBoundary />} path={HOME_PAGE} />
    </Routes>
  );
};

export default MainRouter;

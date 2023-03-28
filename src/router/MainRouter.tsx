import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { HOME_PAGE } from 'router/constants';
import HomePage from 'pages/HomePage/HomePage';
import ErrorBoundary from 'components/ErrorBoundary';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const MainRouter: React.FC<React.PropsWithChildren> = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<HomePage />} errorElement={<ErrorBoundary />} path={HOME_PAGE} />
    </Routes>
  );
};

export default MainRouter;

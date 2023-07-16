import React, { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

import { HOME_PAGE } from 'router/constants';
import PrivateOutlet from 'router/PrivateOutlet';

import AddNewCompany from 'pages/Company/AddNew';
import CompanyEdit from 'pages/Company/Edit';
import CompanyProfile from 'pages/Company/Profile';
import NotFoundPage from 'pages/NotFoundPage';
import UserProfile from 'pages/User/Profile';

const HomePage = lazy(() => import('pages/Home'));
const LoginPage = lazy(() => import('pages/Authentication/Login'));
const SignupPage = lazy(() => import('pages/Authentication/Signup'));

const MainRouter: React.FC<React.PropsWithChildren> = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<HomePage />} path={HOME_PAGE} />
      <Route path="company/:slug" element={<CompanyProfile />} />
      <Route element={<PrivateOutlet />}>
        <Route path="user/:slug" element={<UserProfile />} />
        <Route path="company/:slug/edit/:id" element={<CompanyEdit />} />
        <Route path="company/add-new" element={<AddNewCompany />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};

export default MainRouter;

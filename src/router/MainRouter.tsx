import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { HOME_PAGE } from 'router/constants';
import PrivateOutlet from 'router/PrivateOutlet';

import AddNewCompany from 'pages/Company/AddNew/AddNew';
import CompanyEdit from 'pages/Company/Edit/Edit';
import CompanyProfile from 'pages/Company/Profile/Profile';
import HomePage from 'pages/HomePage/HomePage';
import Login from 'pages/Login/Login';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import Signup from 'pages/Signup/Signup';
import UserProfile from 'pages/User/Profile/Profile';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

const MainRouter: React.FC<React.PropsWithChildren> = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<HomePage />} errorElement={<ErrorBoundary />} path={HOME_PAGE} />
      <Route path="company/:slug" element={<CompanyProfile />} />
      <Route element={<PrivateOutlet />}>
        <Route path="user/:slug" element={<UserProfile />} />
        <Route path="company/:slug/edit/:id" element={<CompanyEdit />} />
        <Route path="company/add-new" element={<AddNewCompany />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default MainRouter;

import React, { Suspense } from 'react';

import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setup as i18nSetup } from 'utils/translations/setup';

import Spinner from 'components/Spinner/Spinner';

import App from './App';
import './index.css';

i18nSetup();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Spinner isSuspense size="large" />}>
      <ToastContainer position="top-center" autoClose={3500} hideProgressBar />
      <App />
    </Suspense>
  </React.StrictMode>
);

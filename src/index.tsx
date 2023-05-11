import React, { Suspense } from 'react';

import ReactDOM from 'react-dom/client';
import { setup as i18nSetup } from 'utils/translations/setup';

import Spinner from 'components/Spinner/Spinner';

import App from './App';
import './index.css';

i18nSetup();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Spinner size="large" />}>
      <App />
    </Suspense>
  </React.StrictMode>
);

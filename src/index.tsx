import React from 'react';

import ReactDOM from 'react-dom/client';
import { setup as i18nSetup } from 'utils/translations/setup';

import App from './App';
import './index.css';

i18nSetup();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

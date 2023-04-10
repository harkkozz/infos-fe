import React from 'react';

import { setup as i18nSetup } from '18nConfig/setup';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

i18nSetup();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import 'uimini';

import { Store } from '@base/Store';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Store>
      <Router>
        <App />
      </Router>
    </Store>
  </React.StrictMode>
);

import 'antd/dist/antd.css';
import './languages/i18n';
import './styles/typography.css';
import './assets/css/custom-react-scrollbar.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

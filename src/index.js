import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserProvider from './context/UserProvider';
import './style/style.scss';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

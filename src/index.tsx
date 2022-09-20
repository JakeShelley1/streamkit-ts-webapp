import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/tachyons.css';
import './styles/tachyons-extensions.css';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

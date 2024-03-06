import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const hasAccess: boolean = false;

root.render(
  <React.StrictMode>
    <App hasAccess={hasAccess} />
  </React.StrictMode>
);

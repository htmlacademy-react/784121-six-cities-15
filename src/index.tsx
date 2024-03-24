import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorMessage from './components/error-message';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const hasAccess: boolean = false;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App hasAccess={hasAccess} />
    </Provider>
  </React.StrictMode>
);

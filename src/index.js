import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ModalsContextProvider from './components/Modals/modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalsContextProvider>
      <App />
    </ModalsContextProvider>
  </React.StrictMode>
);

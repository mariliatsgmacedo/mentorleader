import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthGoogleProvider } from './context/authenticate';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <AuthGoogleProvider>
        <App />
      </AuthGoogleProvider>
    </Router>
  </React.StrictMode>
);
reportWebVitals();

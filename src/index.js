import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-o8lihcl8o6mwsdg7.us.auth0.com"
  clientId="J89hS2B5uZ5paxewrJsmxUXJ8pHKLiRH"
  authorizationParams={{
    redirect_uri: window.location.origin+"/Movies"
  }}
>
    <App />
    </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

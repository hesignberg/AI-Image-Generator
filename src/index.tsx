import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from 'Slices/theme/store';
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID = "324059747224-umtihkq3fnmaiv31f9glpb2o0nlvhon5.apps.googleusercontent.com";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
    <GoogleOAuthProvider clientId={CLIENT_ID}>

      <App />
      </GoogleOAuthProvider>

    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Main from './pages/Main';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// jans note: don't touch this file because i don't as well, it just imports the Main page to the index.html inside the public folder
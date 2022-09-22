import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf42prUsV1b2JeRhzzBqLfZ_QFF3yfv-U",
  authDomain: "react-proyect-ro.firebaseapp.com",
  projectId: "react-proyect-ro",
  storageBucket: "react-proyect-ro.appspot.com",
  messagingSenderId: "141838173048",
  appId: "1:141838173048:web:504833a2d641fd930d3e8d"
};

  initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/*<React.StrictMode>*/}
    <App />
  {/*</React.StrictMode>*/}
  </> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

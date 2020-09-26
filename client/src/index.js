import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const  firebaseConfig = {
  apiKey: "AIzaSyAAgUtOHGKz2pyRiA8suOqgHmxxC-vyTVY",
  authDomain: "shellhackscodeforgood.firebaseapp.com",
  databaseURL: "https://shellhackscodeforgood.firebaseio.com",
  projectId: "shellhackscodeforgood",
  storageBucket: "shellhackscodeforgood.appspot.com",
  messagingSenderId: "798089780581",
  appId: "1:798089780581:web:22c37dde2f77122445d58c",
  measurementId: "G-NJJZQLP8P4"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

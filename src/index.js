import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBcsSruxUTN4vsporGhSVm6eg_QL_vWHRI",
  authDomain: "cart-7b560.firebaseapp.com",
  databaseURL: "https://cart-7b560.firebaseio.com",
  projectId: "cart-7b560",
  storageBucket: "cart-7b560.appspot.com",
  messagingSenderId: "133807183631",
  appId: "1:133807183631:web:be032ba9670475455f107a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Firebase
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBMkS_WqCeFER0XZT0kfC6kQ69j4dTMpCc",
  authDomain: "provisiones-stan.firebaseapp.com",
  projectId: "provisiones-stan",
  storageBucket: "provisiones-stan.appspot.com",
  messagingSenderId: "545803902796",
  appId: "1:545803902796:web:4491fc4726851ccbf4b9e9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


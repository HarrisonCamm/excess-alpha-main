import firebase from 'firebase/compat/app'

import 'firebase/compat/auth';

import 'firebase/compat/firestore';

// import { initializeApp } from "firebase/app";




// Your web app's Firebase configuration
const app = firebase.initializeApp({
    apiKey: "AIzaSyDYBR1HQJpBlj2nZrkx2x_UYTxjRR0IbsA",
    authDomain: "auth-development-74be1.firebaseapp.com",
    projectId: "auth-development-74be1",
    storageBucket: "auth-development-74be1.appspot.com",
    messagingSenderId: "634944658447",
    appId: "1:634944658447:web:e30fd2b9403ba72be7977a"
  });

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY, 
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   };


export const auth = app.auth()
export default app
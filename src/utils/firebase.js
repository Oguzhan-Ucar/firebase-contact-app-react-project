// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsWvkyOPe0pgf7kj_TuctcEqKRBBWMP7A",
  authDomain: "fir-contact-app-725e0.firebaseapp.com",
  databaseURL: "https://fir-contact-app-725e0-default-rtdb.firebaseio.com",
  projectId: "fir-contact-app-725e0",
  storageBucket: "fir-contact-app-725e0.appspot.com",
  messagingSenderId: "782199813779",
  appId: "1:782199813779:web:b26a9de8251fbb0cda3f66"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
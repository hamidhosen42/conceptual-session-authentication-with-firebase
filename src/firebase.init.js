// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCObZzD2A_G919_nqbHqgUyxXjZAFDMbFQ",
  authDomain: "react-genius-car-service.firebaseapp.com",
  projectId: "react-genius-car-service",
  storageBucket: "react-genius-car-service.appspot.com",
  messagingSenderId: "899590749133",
  appId: "1:899590749133:web:403d0cff55ee6730d22284",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
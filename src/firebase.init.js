import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjeNQd-FOlL8TCxEMhg1o2Z_lmUBjn1lo",
  authDomain: "react-color-generator-firebase.firebaseapp.com",
  projectId: "react-color-generator-firebase",
  storageBucket: "react-color-generator-firebase.appspot.com",
  messagingSenderId: "522916022192",
  appId: "1:522916022192:web:348db9a42fc69e73b1b875",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;

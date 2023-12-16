// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHMIMWdr05CMrtcryvdDVfHdZvSLFh0QM",
  authDomain: "linkedin-clone-5bfdd.firebaseapp.com",
  projectId: "linkedin-clone-5bfdd",
  storageBucket: "linkedin-clone-5bfdd.appspot.com",
  messagingSenderId: "535143275309",
  appId: "1:535143275309:web:cd83ffbcdd9f8e5bf551a4",
  measurementId: "G-8YCNKLW3DJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
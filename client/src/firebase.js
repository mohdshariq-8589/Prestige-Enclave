// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-olifarhaan.firebaseapp.com",
  projectId: "mern-auth-olifarhaan",
  storageBucket: "mern-auth-olifarhaan.appspot.com",
  messagingSenderId: "160507013914",
  appId: "1:160507013914:web:4f1e99b47a1588751d5aa3",

};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);

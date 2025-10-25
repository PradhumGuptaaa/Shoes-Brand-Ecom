// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "shoes-brand-ecom.firebaseapp.com",
  projectId: "shoes-brand-ecom",
  storageBucket: "shoes-brand-ecom.firebasestorage.app",
  messagingSenderId: "791161795441",
  appId: "1:791161795441:web:788eaac2f09a00c255bcd0",
  measurementId: "G-7F12HQ49E9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

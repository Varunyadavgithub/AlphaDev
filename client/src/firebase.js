// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-99658.firebaseapp.com",
  projectId: "mern-blog-99658",
  storageBucket: "mern-blog-99658.appspot.com",
  messagingSenderId: "259283854643",
  appId: "1:259283854643:web:2a8c1e45b2b0be47540a46"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

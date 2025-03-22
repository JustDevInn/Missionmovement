// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "missionmovement-9f4ac.firebaseapp.com",
  projectId: "missionmovement-9f4ac",
  storageBucket: "missionmovement-9f4ac.appspot.com",
  messagingSenderId: "218934638353",
  appId: "1:218934638353:web:2de3a936362cc383fefeb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Exports
export const auth = getAuth(app);
export const db = getFirestore(app); // 👈 Export Firestore
export default app;

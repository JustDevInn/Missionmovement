import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration (DO NOT expose API keys in public repos)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY, // Move to env file for security
  authDomain: "missionmovement-9f4ac.firebaseapp.com",
  projectId: "missionmovement-9f4ac",
  storageBucket: "missionmovement-9f4ac.firebasestorage.app",
  messagingSenderId: "218934638353",
  appId: "1:218934638353:web:2de3a936362cc383fefeb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

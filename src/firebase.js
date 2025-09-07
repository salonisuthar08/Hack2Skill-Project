// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRb-uF44NEus7vDrTB4G6z7XRt7tvPKLI",
  authDomain: "soulcraft-7975d.firebaseapp.com",
  projectId: "soulcraft-7975d",
  storageBucket: "soulcraft-7975d.firebasestorage.app",
  messagingSenderId: "365372739733",
  appId: "1:365372739733:web:f48159f2c5565bcaa2cb9c",
  measurementId: "G-MJEL5DQ2EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getFirestore } from "firebase/firestore";

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

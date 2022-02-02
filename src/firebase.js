// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdV1g3DDRzTWra6LyM6Zqfzw9LcP7jeoE",
  authDomain: "sparta-react-basic-f741d.firebaseapp.com",
  projectId: "sparta-react-basic-f741d",
  storageBucket: "sparta-react-basic-f741d.appspot.com",
  messagingSenderId: "546364512117",
  appId: "1:546364512117:web:d8ae0f6f7f725fbd07653c",
  measurementId: "G-KSKW4QV6LE",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
export const db = getFirestore();

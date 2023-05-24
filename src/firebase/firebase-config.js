// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_cXY-nTMHeWv57HpWIrQvR7QYJuI2kmI",
  authDomain: "dongji-cost-be900.firebaseapp.com",
  projectId: "dongji-cost-be900",
  storageBucket: "dongji-cost-be900.appspot.com",
  messagingSenderId: "747919413616",
  appId: "1:747919413616:web:22c26f50c5c51ca37abfb5",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
export const auth = getAuth(app);

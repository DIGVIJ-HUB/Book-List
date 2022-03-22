import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDY7Cstqy617bWiUFZFAwRkUopWXt3Pgs0",
  authDomain: "my-money-2a52c.firebaseapp.com",
  projectId: "my-money-2a52c",
  storageBucket: "my-money-2a52c.appspot.com",
  messagingSenderId: "220680375778",
  appId: "1:220680375778:web:daf8a8cce7518233b2fdbb",
  measurementId: "G-P2CNGRPZW0",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();
export { db, auth };

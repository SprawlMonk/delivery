import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoOWz7EN6GpWweNSN5wv6A_W-4i4d-72Y",
  authDomain: "deliveryabreu.firebaseapp.com",
  databaseURL: "https://deliveryabreu-default-rtdb.firebaseio.com",
  projectId: "deliveryabreu",
  storageBucket: "deliveryabreu.appspot.com",
  messagingSenderId: "268176544690",
  appId: "1:268176544690:web:cd96780bac582951084aab"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
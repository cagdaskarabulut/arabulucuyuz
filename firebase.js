// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYzkT82ZbSyxPH65DNRxZRuqSJtluL1R4",
  authDomain: "arabulucuyuz-firebase.firebaseapp.com",
  projectId: "arabulucuyuz-firebase",
  storageBucket: "arabulucuyuz-firebase.appspot.com",
  messagingSenderId: "972348387079",
  appId: "1:972348387079:web:2a456e83d5822c590c1fa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export {db}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZzk8xbgMZ-nHPVP0-6wKLaZQMXxt15RA",
  authDomain: "vibin--app.firebaseapp.com",
  projectId: "vibin--app",
  storageBucket: "vibin--app.appspot.com",
  messagingSenderId: "684839268240",
  appId: "1:684839268240:web:056cb2426f0b693f668d15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
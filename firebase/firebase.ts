// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import dot from 'dotenv'
dot.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPRESS_FIREBASE_API_KEY,
  authDomain: process.env.EXPRESS_FIREBASE_AUTH_DOMAIN,
  projectId: process.env .EXPRESS_FIREBASE_PROJECT_ID,
  storageBucket: process.env .EXPRESS_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env .EXPRESS_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env .EXPRESS_FIREBASE_APP_ID,
  measurementId: process.env .EXPRESS_FIREBASE_MEASUREMENT_ID 
};


// Initialize Firebase
// Initialize Firebase
export default function initFirebase(){
  if (!getApps().length) {
      const app = initializeApp(firebaseConfig);
  }
};
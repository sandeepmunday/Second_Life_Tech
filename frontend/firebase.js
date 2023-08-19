// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9bcS51tAyXKN4zcTXYCfK2uBEKoV9IxA",
  authDomain: "push-notifications-bcb49.firebaseapp.com",
  projectId: "push-notifications-bcb49",
  storageBucket: "push-notifications-bcb49.appspot.com",
  messagingSenderId: "893570949510",
  appId: "1:893570949510:web:db8ee73843e53a9618cc07"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbh3vbia2dddDtEvj5OSEf22RAepOpiR0",
  authDomain: "ai-powered-netflix-e5668.firebaseapp.com",
  projectId: "ai-powered-netflix-e5668",
  storageBucket: "ai-powered-netflix-e5668.firebasestorage.app",
  messagingSenderId: "266831407718",
  appId: "1:266831407718:web:4cd5ba3ad8adade3845ba7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

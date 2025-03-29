// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_ifQjrmUbj5teLi_zADDsGA30cdZd9_s",
  authDomain: "bookhaven-f9bf8.firebaseapp.com",
  projectId: "bookhaven-f9bf8",
  storageBucket: "bookhaven-f9bf8.firebasestorage.app",
  messagingSenderId: "743209523214",
  appId: "1:743209523214:web:acfe2cad84a9212f94c45f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Fix: Export as default
export default app;

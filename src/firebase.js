// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "todo-app-255c0.firebaseapp.com",
  projectId: "todo-app-255c0",
  storageBucket: "todo-app-255c0.appspot.com",
  messagingSenderId: "305693183515",
  appId: "1:305693183515:web:5e9c79eb4dd3993e19b2be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);

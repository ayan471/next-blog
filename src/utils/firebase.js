// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "next-blog-d16a3.firebaseapp.com",
  projectId: "next-blog-d16a3",
  storageBucket: "next-blog-d16a3.appspot.com",
  messagingSenderId: "231120962473",
  appId: "1:231120962473:web:c4edf0b4578775aa18fab8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

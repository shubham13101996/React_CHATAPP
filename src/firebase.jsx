// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtpX746RsGwC5ohCqsFadmf9ql5Bcsf3c",
  authDomain: "instantchat-e5ad9.firebaseapp.com",
  projectId: "instantchat-e5ad9",
  storageBucket: "instantchat-e5ad9.appspot.com",
  messagingSenderId: "527473442363",
  appId: "1:527473442363:web:9d0e23a4f1096a6b99a61e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

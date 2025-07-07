// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASaN4UhTdbz-pfU2v_MMQG2HbdNu1HoKw",
  authDomain: "ai-image-generator-5a7c3.firebaseapp.com",
  projectId: "ai-image-generator-5a7c3",
  storageBucket: "ai-image-generator-5a7c3.firebasestorage.app",
  messagingSenderId: "225477000495",
  appId: "1:225477000495:web:91ab1302c16bfffa8eb5da",
  measurementId: "G-C418GG7BSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// const analytics = getAnalytics(app);
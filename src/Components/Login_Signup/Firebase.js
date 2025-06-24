// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWN2sob0TbTyTBz9OPbxZ-1ICBLuLOHtw",
  authDomain: "fir-login-e98c4.firebaseapp.com",
  projectId: "fir-login-e98c4",
  storageBucket: "fir-login-e98c4.appspot.com", // <-- FIXED HERE
  messagingSenderId: "31417135756",
  appId: "1:31417135756:web:816e1d79f10f80fd91c1a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // <-- FIXED HERE
export const db = getFirestore(app);
export default app;
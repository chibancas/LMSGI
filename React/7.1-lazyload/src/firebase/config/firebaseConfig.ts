// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBUkwBZO5VzQXNBSEFzC_mQ66uqVO7jO7Y",
  authDomain: "primer-projecto-clase.firebaseapp.com",
  projectId: "primer-projecto-clase",
  storageBucket: "primer-projecto-clase.appspot.com",
  messagingSenderId: "143224362257",
  appId: "1:143224362257:web:b32d131516aab7765868b0",
  measurementId: "G-H3V645YELJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
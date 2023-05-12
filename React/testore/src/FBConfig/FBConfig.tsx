// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//¡
//!
//en esta constante se guardan las credenciales de conexión
export const firebaseConfig = {
  apiKey: "AIzaSyBVFKIPacLushbAiUqIbDv2Dlyctbd1jS8",
  authDomain: "testore-554f0.firebaseapp.com",
  projectId: "testore-554f0",
  storageBucket: "testore-554f0.appspot.com",
  messagingSenderId: "932642052775",
  appId: "1:932642052775:web:915a9722b2174209d7d982",
  measurementId: "G-J4V23YQ254"
};

// Initialize Firebase
// se inicializa la la app
// con una función propia de
// FB y se le pasa como parámetro las
// credenciales antes almacenadas
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
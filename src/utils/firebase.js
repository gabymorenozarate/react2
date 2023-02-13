// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYPG8_zjqL9cntUGhS1iEDwBzTpBDtD0M",
  authDomain: "reactstorefinal.firebaseapp.com",
  projectId: "reactstorefinal",
  storageBucket: "reactstorefinal.appspot.com",
  messagingSenderId: "754336082948",
  appId: "1:754336082948:web:57a8746efb47b95a839951",
  measurementId: "G-8FBM40JRV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const initFirebase = () => app
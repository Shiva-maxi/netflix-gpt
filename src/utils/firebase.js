// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQlvdJA17lt1hEd9Mapl_JKwKKk-nlZuY",
  authDomain: "netflixgpt-63ad9.firebaseapp.com",
  projectId: "netflixgpt-63ad9",
  storageBucket: "netflixgpt-63ad9.appspot.com",
  messagingSenderId: "763191149165",
  appId: "1:763191149165:web:f9a4e03dfdbc3c020cf564",
  measurementId: "G-669QKYL289"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
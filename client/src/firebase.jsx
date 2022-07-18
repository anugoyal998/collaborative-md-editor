// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBApS0kHY_Q3BQArMAkDqp8PsKR2aWVmvk",
  authDomain: "md-editor-19fb4.firebaseapp.com",
  projectId: "md-editor-19fb4",
  storageBucket: "md-editor-19fb4.appspot.com",
  messagingSenderId: "887375548790",
  appId: "1:887375548790:web:ce9ea886bda57606b3ea57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlAV1INeg44XN8tPouP0fRXdPMEm-ngtU",
  authDomain: "push-notification-demo-18e67.firebaseapp.com",
  projectId: "push-notification-demo-18e67",
  storageBucket: "push-notification-demo-18e67.appspot.com",
  messagingSenderId: "1054385593122",
  appId: "1:1054385593122:web:0699ce3bb690e868d5237b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
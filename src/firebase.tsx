import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE7kUnrZLARVEi7rvhIJxxVJqh5Y_lUcg",
  authDomain: "react-contact-form-28f4d.firebaseapp.com",
  projectId: "react-contact-form-28f4d",
  storageBucket: "react-contact-form-28f4d.appspot.com",
  messagingSenderId: "939511658473",
  appId: "1:939511658473:web:a50a2412bdef9c9bd43d78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;

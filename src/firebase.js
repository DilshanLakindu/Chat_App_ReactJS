import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBqDDVkzFGLYYdYrTuIEEb4upgmLbhNCTA",
  authDomain: "chatapp-85760.firebaseapp.com",
  projectId: "chatapp-85760",
  storageBucket: "chatapp-85760.appspot.com",
  messagingSenderId: "166420313125",
  appId: "1:166420313125:web:4d5f7efaa8724b1f23bbcc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

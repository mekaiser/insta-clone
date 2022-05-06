// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLNJh1FO8ckViH045Gm0WPZAu1UOkRqJ4",
  authDomain: "insta-clone-2d45f.firebaseapp.com",
  projectId: "insta-clone-2d45f",
  storageBucket: "insta-clone-2d45f.appspot.com",
  messagingSenderId: "649460533523",
  appId: "1:649460533523:web:6562bd679e4a26edf972e6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };


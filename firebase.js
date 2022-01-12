// import firebase from "firebase"
// import { initializeApp } from "firebase/app"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBCsaT8yZofmGZVem_rBd6dwE48OgIjLjc",
    authDomain: "deliver-e-commerce-website.firebaseapp.com",
    projectId: "deliver-e-commerce-website",
    storageBucket: "deliver-e-commerce-website.appspot.com",
    messagingSenderId: "1035048033308",
    appId: "1:1035048033308:web:dc72a2183ea9e1d82313d9"
  };

  //initialise app in frontend and also checking whether already initialised or not
const app= !firebase.apps.length? initializeApp(firebaseConfig) : firebase.app();

const db=app.firestore();

//exporting db, we will use it for showing orders in orders page after fetching from firebase(see orders component)
export default db;
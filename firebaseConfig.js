// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3ZafE0Pck78Su3akzHh4wf7bsrkVx21U",
  authDomain: "fir-react-native-ea5b1.firebaseapp.com",
  projectId: "fir-react-native-ea5b1",
  storageBucket: "fir-react-native-ea5b1.appspot.com",
  messagingSenderId: "653561706392",
  appId: "1:653561706392:web:c74a86c90b6bf800fd5ded"
};
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
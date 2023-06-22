import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB0tujZc07wAHUS-mInAFScBfKTr-3_Ras",
    authDomain: "fireship-app-829ca.firebaseapp.com",
    projectId: "fireship-app-829ca",
    storageBucket: "fireship-app-829ca.appspot.com",
    messagingSenderId: "513952039072",
    appId: "1:513952039072:web:fc1b4c3d2b1014b15f09c5",
    measurementId: "G-MYQCGGKPC4"
  };

  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  // Auth exports
  export const auth = firebase.auth();
  
  // Firestore exports
  export const firestore = firebase.firestore();
  
  // Storage exports
  export const storage = firebase.storage();
  
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAiWQ-Koccp3MQYTYTUXxw87o0m5HI7woI",
    authDomain: "tech-ecommerce-cd1a6.firebaseapp.com",
    projectId: "tech-ecommerce-cd1a6",
    storageBucket: "tech-ecommerce-cd1a6.appspot.com",
    messagingSenderId: "657413081993",
    appId: "1:657413081993:web:c47e7f8e7d7e06b3f96f58",
    measurementId: "G-6MN95PWR4X"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export {firebase};
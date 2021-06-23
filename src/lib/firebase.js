import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';

// Get the Firebase config from the auto generated file.
const firebaseConfig = require('../firebase-config.json').result.sdkConfig;

// Instantiate a Firebase app.
const firebaseApp = firebase.initializeApp(firebaseConfig);


export default firebaseApp;

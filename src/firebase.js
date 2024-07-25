const firebase = require("firebase/app");
require("firebase/database");

// Deine Firebase-Konfigurationsdaten
const firebaseConfig = {
  apiKey: "AIzaSyCjaAmC50fravoG8NOAlH6t13JSwwIkuc8",
  authDomain: "ampel2a.firebaseapp.com",
  databaseURL: "https://ampel2a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ampel2a",
  storageBucket: "ampel2a.appspot.com",
  messagingSenderId: "866134153595",
  appId: "1:866134153595:web:cbfe3e35c40b2a4e6a05de"
};

/*
const firebaseConfig = {
  apiKey: "DEINE_API_KEY",
  authDomain: "DEINE_AUTH_DOMAIN",
  databaseURL: "DEINE_DATABASE_URL",
  projectId: "DEIN_PROJECT_ID",
  storageBucket: "DEIN_STORAGE_BUCKET",
  messagingSenderId: "DEIN_MESSAGING_SENDER_ID",
  appId: "DEINE_APP_ID"
};
*/

// Initialisiere Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

module.exports = database;

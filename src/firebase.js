// hmm. This does not work yet...




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBctpZqoIaTlr3icvYXj83BdA8iVTpded8",
  authDomain: "javascriptdb-46f88.firebaseapp.com",
  databaseURL: "https://javascriptdb-46f88-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "javascriptdb-46f88",
  storageBucket: "javascriptdb-46f88.firebasestorage.app",
  messagingSenderId: "556068433670",
  appId: "1:556068433670:web:bc8bbc18a6b8b359c77887"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getDatabase(app)

// hmm. This does not work yet...
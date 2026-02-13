// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth";
import { getDatabase } from "firebase/database"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBctpZqoIaTlr3icvYXj83BdA8iVTpded8", // can be public? normally should be hidden, but since firebase use auth rules, it can be public
  authDomain: "javascriptdb-46f88.firebaseapp.com",
  databaseURL: "https://javascriptdb-46f88-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "javascriptdb-46f88",
  storageBucket: "javascriptdb-46f88.firebasestorage.app", // can delete
  messagingSenderId: "556068433670", // can delete
  appId: "1:556068433670:web:bc8bbc18a6b8b359c77887"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();

// For creating a new user with email and password
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("User signed up:", user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error signing up:", errorCode, errorMessage);
    // ..
  });

  // For signing in an existing user with email and password
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User signed in:", user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error signing in:", errorCode, errorMessage);
  });


  const googleProvider = new GoogleAuthProvider();

  // For signing in with Google in a popup
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  // For monitoring authentication state changes. Detects when users sign in or sign out.
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

export const db = getDatabase(app)

// import auth, app and firebase from firebase??
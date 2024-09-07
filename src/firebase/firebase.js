import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoJxZcqFAzjIN6PzXJYkt1Q6yMh26guH0",
  authDomain: "reactpage-ca865.firebaseapp.com",
  projectId: "reactpage-ca865",
  storageBucket: "reactpage-ca865.appspot.com",
  messagingSenderId: "563125506813",
  appId: "1:563125506813:web:7a0d2e983bbcadee622494",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signOut };

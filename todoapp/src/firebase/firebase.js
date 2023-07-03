import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDlZwPDbBfC-zuaKl9wk7GqzBLFHsnbCW8",
  authDomain: "todo-firebase-ad344.firebaseapp.com",
  projectId: "todo-firebase-ad344",
  storageBucket: "todo-firebase-ad344.appspot.com",
  messagingSenderId: "1056102166704",
  appId: "1:1056102166704:web:659e021450ce690f334b75",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };

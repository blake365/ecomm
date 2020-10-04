import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDj5cDySYPOQ9jQywLnep24YWsPf011V2o",
  authDomain: "react-ecomm-9ebcc.firebaseapp.com",
  databaseURL: "https://react-ecomm-9ebcc.firebaseio.com",
  projectId: "react-ecomm-9ebcc",
  storageBucket: "react-ecomm-9ebcc.appspot.com",
  messagingSenderId: "706382420550",
  appId: "1:706382420550:web:bef9bc2f95a928e55c8847",
  measurementId: "G-KLCRYMNE86",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

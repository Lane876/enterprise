import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAWFQfFuCXAEDJKTCZS2kgAt2c1XjCzv4o",
  authDomain: "crown-db-aa592.firebaseapp.com",
  databaseURL: "https://crown-db-aa592.firebaseio.com",
  projectId: "crown-db-aa592",
  storageBucket: "crown-db-aa592.appspot.com",
  messagingSenderId: "840610710143",
  appId: "1:840610710143:web:74989e41e488173494f54a",
  measurementId: "G-RRMWJ42KY8"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

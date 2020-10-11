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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  console.log(snapShot);

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>
{
  const collectionRef = firestore.collection(collectionKey)
  
  const batch = firestore.batch()
  objectsToAdd.forEach(obj =>
  {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })
  
  return await batch.commit()
}

firebase.initializeApp(config);

export const covertCollectionsSnapshotToMap = (collections) =>
{
  const transformedCollection = collections.docs.map(
    doc =>
    {
      const { title, items } = doc.data();
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title, 
        items
        }
    }
  )
  
  return transformedCollection.reduce((accumulator, collection) =>
  {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

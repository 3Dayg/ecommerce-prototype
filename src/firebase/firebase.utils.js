import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyABUhYTRbubDDgpytM-xBvwnmH21ioCqSM",
    authDomain: "ecommerce-prototype-db.firebaseapp.com",
    databaseURL: "https://ecommerce-prototype-db.firebaseio.com",
    projectId: "ecommerce-prototype-db",
    storageBucket: "ecommerce-prototype-db.appspot.com",
    messagingSenderId: "972206913043",
    appId: "1:972206913043:web:289d494b9df634240771e6",
    measurementId: "G-CRYCXBCL10"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

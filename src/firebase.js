import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCkj22dRB2rIXtR04d99rnLJkl7flo7w50",
  authDomain: "disney-clone-ce5c4.firebaseapp.com",
  projectId: "disney-clone-ce5c4",
  storageBucket: "disney-clone-ce5c4.appspot.com",
  messagingSenderId: "950622287353",
  appId: "1:950622287353:web:c4206b1a322e8510aeb928",
  measurementId: "G-CVQYP336ZX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

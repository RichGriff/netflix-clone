import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXUa5u2Q-wQG3Dz4i5Xlz00rdyTC1D0w8",
  authDomain: "netflix-clone-52f6b.firebaseapp.com",
  databaseURL: "https://netflix-clone-52f6b.firebaseio.com",
  projectId: "netflix-clone-52f6b",
  storageBucket: "netflix-clone-52f6b.appspot.com",
  messagingSenderId: "955769567612",
  appId: "1:955769567612:web:03092a4b5269f641f34cf9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

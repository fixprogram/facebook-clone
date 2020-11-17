import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBBKpyqiP9e_k430B9XN-F5c4uix0gZ3qg",
  authDomain: "facebook-clone-6569f.firebaseapp.com",
  databaseURL: "https://facebook-clone-6569f.firebaseio.com",
  projectId: "facebook-clone-6569f",
  storageBucket: "facebook-clone-6569f.appspot.com",
  messagingSenderId: "688345996439",
  appId: "1:688345996439:web:a666117f7f545431819dd2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

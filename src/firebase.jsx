import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCy5A174sDy4UAWb-oL2DQBcPKQ3lj8_hA",
  authDomain: "twitter-clone-11a94.firebaseapp.com",
  projectId: "twitter-clone-11a94",
  storageBucket: "twitter-clone-11a94.appspot.com",
  messagingSenderId: "1014995623279",
  appId: "1:1014995623279:web:fe2e5044cd0df160f9dc9a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { provider, db, auth };

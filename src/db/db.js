import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDG4hKJRQoC9eZA3etCS8ch63g1BKE9zXc",
  authDomain: "tiendavirtualtiens.firebaseapp.com",
  projectId: "tiendavirtualtiens",
  storageBucket: "tiendavirtualtiens.appspot.com",
  messagingSenderId: "618247498752",
  appId: "1:618247498752:web:7163737796c4d209bffce5"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db
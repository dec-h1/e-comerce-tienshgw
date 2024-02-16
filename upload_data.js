import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { readFileSync } from 'fs';
import productos from './data.js';
// Acá van las credenciales de FireStore

//EDITAR SI ES NECESARIO//

const firebaseConfig = {
    apiKey: "AIzaSyDG4hKJRQoC9eZA3etCS8ch63g1BKE9zXc",
    authDomain: "tiendavirtualtiens.firebaseapp.com",
    projectId: "tiendavirtualtiens",
    storageBucket: "tiendavirtualtiens.appspot.com",
    messagingSenderId: "618247498752",
    appId: "1:618247498752:web:7163737796c4d209bffce5"
  };

//EDITAR SI ES NECESARIO//

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const collectionRef = collection(db, 'productos'); //Editar la colección si corresponde. 

// Lee el json verificar que el nombre del archivo json sea correcto, sino modificar. 
// const dataArray = JSON.parse(readFileSync('./data.json', 'utf8'));

const dataArray = productos

// Acá hacer un loop por cada archivo y lo sube a la coleccion de referencia. 
dataArray.forEach(async (data) => {
  try {
    const docRef = await addDoc(collectionRef, data);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
});

// ejecutar en consola "node upload_data.js" para correr el srcipt
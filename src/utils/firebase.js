
import { initializeApp } from "firebase/app";
//sdk de firebase
import { getDocs, getFirestore, collection, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBigkqLjUzU_GnS13PUVDnNM_vrmOYxDA4",
  authDomain: "reactfinal-e58a3.firebaseapp.com",
  projectId: "reactfinal-e58a3",
  storageBucket: "reactfinal-e58a3.appspot.com",
  messagingSenderId: "732243731394",
  appId: "1:732243731394:web:de222a636ebad9e2a02c5b"
};


 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app)

 //funcion que retorna todos los items de la coleccion "productos"
 export async function fetchSimulation(){
    // Crear referencia a la coleccion
    const productsCollectionRef = collection(db, "productos")
 
 
 /*getDocs(productsCollectionRef).then ((snapshot) =>{
    const docsData = snapshot.docs.map((doc) => doc.data());
    console.log(docsData) ; 
 }); */

// pedirle a firebase los documentos de esa coleccion
 const snapshot = await getDocs(productsCollectionRef);

 const docsData = snapshot.docs.map((doc) => {

  return {...doc.data(), id: doc.id}
 });
 return docsData;
}


//funcion que retorna un documento segun su ID
export async function getSingleItem(itemid) {

    const productsCollectionRef = collection(db, "products");

    const productsRef = doc(productsCollectionRef, itemid);

    const snapshot = await getDocs(productsRef);

    return {...snapshot.data(), id: snapshot.id};
}


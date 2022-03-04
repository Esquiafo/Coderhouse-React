import {  initializeApp } from 'firebase/app';
import { collection, addDoc, getFirestore, updateDoc,doc } from "firebase/firestore"; 




const PushApi = (props) =>{
    const app = initializeApp({
        apiKey: "AIzaSyCX4jT-67GWc46D1Q6RZqXmW6Cyzd2vgl0",
        authDomain: "artstation-c28e8.firebaseapp.com",
        projectId: "artstation-c28e8",
        storageBucket: "artstation-c28e8.appspot.com",
        messagingSenderId: "552661991680",
        appId: "1:552661991680:web:13d9ecc1f0b81b2a86b3e5"
    });
let finalPrice=0;
props.items.map(x=>finalPrice=finalPrice+(x.price*x.cantidad))
 const db = getFirestore();
 

// Add a new document with a generated id.
addDoc(collection(db, "order"), {
    buyer: props.name,
    items: props.items,
    date: new Date().toLocaleString() + "",
    total: finalPrice, 
    phone: props.phone, 
  })
 
.then(function(docRef) {
    
    props.items.map(x=>{   

    let stocked = parseInt(x.cantidad);
    let productsUpdated = doc(db, "products", x.id)
    updateDoc(productsUpdated, {
        stock: (x.stock - stocked)
      });
    })
    
    alert("Tu ID de compra es " + docRef.id)
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

}
export default PushApi;
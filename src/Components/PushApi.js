import {  initializeApp } from 'firebase/app';
import { collection, addDoc, getFirestore, updateDoc,doc,setDoc, query, getDocs } from "firebase/firestore"; 
import UserPush from './UserPush'
import {useEffect} from 'react'



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

const customUser = {
    email: props.email,
    nombre: props.name,
    telefono: props.telefono,
}
let purchaseId = []
// Add a new document with a generated id.
addDoc(collection(db, "order"), {
    
    buyer: props.name,
    items: props.items,
    date: new Date().toLocaleString() + "",
    total: finalPrice<10000 ? finalPrice+1000 : finalPrice, 
    phone: props.phone, 
    email: props.email
  })
 
.then(function(docRef) {
    
    props.items.map(x=>{   

    let stocked = parseInt(x.cantidad);
    let productsUpdated = doc(db, "products", x.id)
    updateDoc(productsUpdated, {
        stock: (x.stock - stocked)
      });
    })
    
        const getUsers = async () =>{
            const q = query(collection(db, "users"));
            const querySnapshot = await getDocs(q);
            const emailQuery = doc(db, 'users', `${props.email}`);
            let isTruly = false
            querySnapshot.forEach((doc) => {
             if (doc.id==props.email) {
              console.log("existo!")
              setDoc(emailQuery, { ...doc.data(), purchase: [...doc.data().purchase, docRef.id] });
               isTruly = true
             }
            })
            if (isTruly==false) {
            console.log("aca")
            setDoc(emailQuery, { 
                buyer: props.name,
                phone: props.phone, 
                email: props.email,
                purchase: [docRef.id] });
            }
           
        }
        getUsers();
  
  
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}
export default PushApi;
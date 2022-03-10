
import {  initializeApp } from "firebase/app"
import { useState, useEffect } from 'react';
import {collection, getFirestore, query, getDocs, setDoc,doc, updateDoc } from 'firebase/firestore';


const app = initializeApp({
    apiKey: "AIzaSyCX4jT-67GWc46D1Q6RZqXmW6Cyzd2vgl0",
    authDomain: "artstation-c28e8.firebaseapp.com",
    projectId: "artstation-c28e8",
    storageBucket: "artstation-c28e8.appspot.com",
    messagingSenderId: "552661991680",
    appId: "1:552661991680:web:13d9ecc1f0b81b2a86b3e5"
});
const db = getFirestore();
 

// Add a new document with a generated id.

const UserPush = (props, compra) =>{

useEffect(() => {
  const getUsers = async () =>{
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);
      const emailQuery = doc(db, 'users', `${props.email}`);
      let isTruly = false
      querySnapshot.forEach((doc) => {
       if (doc.id==props.email) {
        console.log("existo!")
        setDoc(emailQuery, { ...doc.data(), purchase: [...doc.data().purchase, compra] });
         isTruly = true
       }
      })
      if (isTruly==false) {
      console.log("aca")
      setDoc(emailQuery, { props, purchase: [compra] });
      }
     
  }
  getUsers();

},[]);

}
export default UserPush;


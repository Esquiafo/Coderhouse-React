
import {  initializeApp } from "firebase/app"
import { useState, useEffect } from 'react';
import {collection, getFirestore, query, getDocs } from 'firebase/firestore';
import axios from "axios";

const app = initializeApp({
    apiKey: "AIzaSyCX4jT-67GWc46D1Q6RZqXmW6Cyzd2vgl0",
    authDomain: "artstation-c28e8.firebaseapp.com",
    projectId: "artstation-c28e8",
    storageBucket: "artstation-c28e8.appspot.com",
    messagingSenderId: "552661991680",
    appId: "1:552661991680:web:13d9ecc1f0b81b2a86b3e5"
});
const db = getFirestore();

const FireBaseApi = () =>{

const [data, setData] = useState();

useEffect(() => {
  const getProducts = async () =>{
    //Creo Array Vacio
      const arrEmp= [];
      //Creo el query
      const q = query(collection(db, "products"));
      //Espero que se llene el dato
      const querySnapshot = await getDocs(q); 
      //De forma asincronica traigo otra api
      axios({
        url: "https://api.bluelytics.com.ar/v2/latest",
      })
      //Una vez que obtengo su resultado
        .then((response) => {
          //El primer query busco en sus elementos y empeizo a darle forma a mi objeto
          querySnapshot.forEach((doc) => {
            // Agrego los elementos a mi array vacio y multiplico el valor cargado en Firabase por lo que llega de la API
            arrEmp.push({...doc.data(),price: doc.data().price*response.data.blue.value_sell, id:doc.id}) 
          })
          setData(arrEmp)
        })
        .catch((error) => {
          console.log(error);
        });   
  }
  getProducts();
},[]);
return data
}
export default FireBaseApi;


import {Link} from "react-router-dom"
import React, {useState, useEffect} from 'react';
import { Image, Segment, Divider, Header } from 'semantic-ui-react'
import SingleItem from "./SingleItem";
import axios from 'axios'
import 'swiper/css';
import "swiper/css/navigation";

const SingleOrder = (props) => {
  const item = props.order
  let purchaseList
  let purchaseCant
  const [data, setValue] = useState([]);
  useEffect(() => {
    console.log(props.order)
     axios.get(`http://localhost:5000/api/order/id/${item}`)
 .then((res) => {
    console.log('Order')
     console.log(res.data)
     console.log('Order')
    setValue(res.data)
 }).catch((err) => {
     console.error(err);
 });
   }, []);
   let count=-1
  let randomStocked
  if(data!==undefined){
    
    randomStocked = data.map(product => {
        
        
        purchaseList = product.items.split(" ")
        purchaseCant = product.cantidad.split(" ")
        
        
        return (
            <div key={product.idorder}> 

            <Header>Order Id: {product.idorder}</Header>
            <Header>Estado Id: {product.estado}</Header>
            {purchaseList.map(x=>
            {
                {count++}
            return(
            
              <div key={x}>
                  
                <Header>Cantidad: {purchaseCant[count]}</Header>
                <SingleItem item={x} />
              </div>
            )}
            )}
            </div>
        )
        
    });
  }


return (

    <div>
{randomStocked}
            
      </div>
      );
    };
    
    export default SingleOrder;
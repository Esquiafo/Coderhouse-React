import {Link} from "react-router-dom"
import React, {useState, useEffect} from 'react';
import { Image, Segment, Divider, Header } from 'semantic-ui-react'
import axios from 'axios'
import 'swiper/css';
import "swiper/css/navigation";

const SingleItem = (props) => {
  const item = props.item

  const [data, setValue] = useState([]);
  useEffect(() => {
     axios.get(`http://localhost:5000/api/item/id/${item}}`)
 .then((res) => {
    console.log('Item')
     console.log(res.data)
     console.log('Item')
    setValue(res.data)
 }).catch((err) => {
     console.error(err);
 });
   }, []);
  let randomStocked
  if(data!==undefined){
    randomStocked = data.map(product => {
        console.log(product)
        return (
    <Segment>
    <div>
    <Header>
    <h4 style={{justifyContent: 'center', display: 'flex'}}>{product.title} | ID: {product.iditem} | Categoria: {product.category}</h4>
    </Header>
    <Divider clearing />
    <Link to={`products/${product.iditem}`}>
    <Image style={{height: "250px"}} src={`http://localhost:5000${product.img}`} rounded  centered />
    </Link>
    </div>
    </Segment>
        )
    });
  }


return (

    <div>
{randomStocked}
            
      </div>
      );
    };
    
    export default SingleItem;
import {Link} from "react-router-dom"
import React, {useState, useEffect} from 'react';
import { Image, Segment, Divider, Header } from 'semantic-ui-react'
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
import axios from 'axios'
import { SwiperSlide, Swiper} from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";

const IndexItem = () => {

  const [data, setValue] = useState(null);
  useEffect(() => {
     axios.get(`http://localhost:5000/api/item/`)
 .then((res) => {
   console.log(res.data)
    setValue(res.data)
 }).catch((err) => {
     console.error(err);
 });
   }, []);
  let stockedProducts=[]
  let randomStocked
  let products=[]
  let randomPasado = []
  if (data!==null) {
    console.log(data)
    data.map(x=> x.stock>=1 ? products.push(x): null)
    while (stockedProducts.length < 5) {
     
    //Genero un numero random
    let random = Math.floor(Math.random() * products.length).toFixed();
    //Busco si esta en el array y si no esta lo agrego
    if(!randomPasado.includes(random)) {
        randomPasado.push(random);
        stockedProducts.push(products[random])
    }
      
    }
    //Mapeo los elementos random de la lista creada
    randomStocked = stockedProducts.map(product => {
      return (

     <SwiperSlide key={product.iditem}>
     <Segment>
        <div>
        <Header>
        <Link to={`products/${product.iditem}`}><h4 style={{justifyContent: 'center', display: 'flex'}}>{product.title}</h4></Link>
        </Header>
        <Divider clearing />
        <Link to={`products/${product.iditem}`}>
        <Image style={{height: "250px"}} src={`http://localhost:5000${product.img}`} rounded  centered />
        </Link>
       

      </div>
      </Segment>

     </SwiperSlide>
      );
    });
  }
  
  return (

<div>
{randomStocked!==undefined ? (

  <div>
  <h1 style={{textAlign: 'center'}}>Algunos productos</h1>
  <Swiper
   // install Swiper modules
   modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
   spaceBetween={85}
   navigation={true}
   pagination={{ clickable: true }}
   centeredSlides={true}
   slidesPerView={1}
   autoplay={{
     delay: 3000,
     disableOnInteraction: false
   }}
   
  
 >
   {randomStocked}
   </Swiper>
 </div>

) : (

  <div style={{textAlign: 'end'}}>
  <br></br>
<div style={{width: "100px",  height: "100px"}}  className="spinner-border" role="status">
  <span  className="visually-hidden">Loading...</span>
</div>
</div>
)}
  



        
  </div>
  );
};

export default IndexItem;
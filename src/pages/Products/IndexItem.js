import {Link} from "react-router-dom"
import React from 'react';
import FireBaseApi from "../../Components/ProductsApi.js";
import { Image, Segment, Divider, Header } from 'semantic-ui-react'
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const IndexItem = () => {
  
  const data = FireBaseApi()
  let stockedProducts=[]
  let randomStocked
  let products=[]
  let randomPasado = []
  if (data!==undefined) {
   
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

     <SwiperSlide key={product.id}>
     <Segment>
        <div>
        <Header>
        <Link to={`products/${product.id}`}><h4 style={{justifyContent: 'center', display: 'flex'}}>{product.title}</h4></Link>
        </Header>
        <Divider clearing />
        <Link to={`products/${product.id}`}>
        <Image style={{height: "150px"}} src={`${product.img[0]}`} rounded  centered />
        </Link>
       

      </div>
      </Segment>

     </SwiperSlide>
      );
    });
  }
  
  return (
  
    <div>
     <h1>Algunos de nuestros productos</h1>
     <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={85}
      slidesPerView={2}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
     
    >
      {randomStocked}
      </Swiper>
    </div>
        
 
  );
};

export default IndexItem;
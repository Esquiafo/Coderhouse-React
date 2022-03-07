import {Link, useParams} from "react-router-dom"
import finalData from "../../Components/ProductsApi.js"
import React, { useContext, useState,useRef} from 'react';
import FireBaseApi from "../../Components/ProductsApi.js";
import CartContext from "../../Context/CartContext"
import { Dimmer, Loader, Image, Segment, Icon, Table, Divider, Header, Label } from 'semantic-ui-react'
import { Container, Row, Col, Button,Carousel } from 'react-bootstrap';
import SwiperCore, { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const IndexItem = () => {
  
  const data = FireBaseApi()
  const prevRef = useRef(null);
  const nextRef = useRef(null);
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
      {/* <div ref={prevRef}>Prev</div>
      <div ref={nextRef}>Next</div> */}
      </Swiper>
    </div>
        
 
  );
};

export default IndexItem;
import React, {useState} from "react";
import { Button, Checkbox, Form, Input} from 'semantic-ui-react'
import axios from "axios";
import FireBaseApi from "../../Components/ProductsApi"
import { Link } from "react-router-dom";
import {Image,  Divider, Header, Segment, Label, Table} from "semantic-ui-react"
import Category from '../Category/Category'
import { Container, Row, Col  } from 'react-bootstrap';
import ApiDolar from "../../Components/ApiDolar"
const FormPost = () => {

  const dolarApi = ApiDolar();
  let [value, setValue] = useState('')
  let newValues=[]
  let [id, setId] = useState('')
  const handleId = (event) => {
    setId(event.target.value)
  }
  const [img, setFile] = useState();

  const saveFile = (e) => {
    setFile(document.getElementById("img").files[0].name);
    console.log( )
  };

  let [category, setCategory] = useState('')
  const handleCategory = (event) => {
    setCategory(event.target.value)
  }
  let [title, setTitle] = useState('')
  const handleTitle = (event) => {
    setTitle(event.target.value)
  }
  let [stock, setStock] = useState('')
  const handleStock = (event) => {
    setStock(event.target.value)
  }
  
  let [price, setPrice] = useState('')
  const handlePrice = (event) => {
    setPrice(event.target.value)
  }
  let [f2, setF2] = useState('')
  const handleF2 = (event) => {
    setF2(event.target.value)
  }
  let [f1, setF1] = useState('')
  const handleF1 = (event) => {
    setF1(event.target.value)
  }

const onChange = (e) => {
  let url = `http://localhost:5000/api/item/${id}`;
  let file = e.target.files[0];
  uploadFile(url, file);
};

const uploadFile = (url, file) => {
  let formData = new FormData();
  formData.append("img", file);
  let bodyEntity = {        
  title: title=="" ? value.title : `${title}`,
  price: price=="" ? value.price : `${price}`, 
  stock: stock=="" ? value.stock : `${stock}`, 
  category: category=="" ? value.category : `${category}`, 
  f1: f1=="" ? value.f1 : `${f1}`, 
  f2: f2=="" ? value.f2 : `${f2}`}
  Object.keys(bodyEntity).map(function(key, index) {
    formData.append(String(key),String(bodyEntity[key]) )
  })
  axios.post(url, formData, {
    
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: {

      }
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    });
};
     
          return (
        <div  data-aos-delay='50' style={{width: '25rem'}}>
      <Form> 
      <Form.Field
      control={Input}
      label='Titulo'
      
      onChange={handleTitle}/>
    <Form.Field
      control={Input}
      label='Price'
   
      onChange={handlePrice}/>
    <Form.Field
      control={Input}
      label='Stock'
   
      onChange={handleStock}/>
   <Form.Field
      control={Input}
      label='Categoria'
   
      onChange={handleCategory}/>
    <Form.Field
      control={Input}
      label='Fila Izquierda'
   
      onChange={handleF1}/>
    <Form.Field
      control={Input}
      label='Fila Derecha'
   
      onChange={handleF2}/>
       {/* <Form.Field
      control={Input}
      type='file'
      label='Imagen'
      id='img'
      onChange={saveFile}
      placeholder={product.img}
      single
      accept="image/png, image/jpeg, image/jpeg"
      /> */}
      <input type="file" onChange={onChange} accept ="image/*"/>
    <Button >Submit</Button>
  </Form>
       </div>
          );
        
      }
  


export default FormPost;

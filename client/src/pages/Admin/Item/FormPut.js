import React, {useState} from "react";
import { Button, Checkbox, Form, Input} from 'semantic-ui-react'
import axios from "axios";

import { Link } from "react-router-dom";
import {Image,  Divider, Header, Segment, Label, Table} from "semantic-ui-react"

import { Container, Row, Col  } from 'react-bootstrap';


const FormPut = () => {
  let [value, setValue] = useState('')
  
  let [id, setId] = useState('')
  const handleId = (event) => {
    setId(event.target.value)
  }
  let url =`http://localhost:5000/api/item/${id}`;
  const handleSet = () => {
    uploadFile(url,img)
  }


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

const byId= () => {
axios.get(`http://localhost:5000/api/item/id/${id}`)
.then((res) => {
   setValue(res.data)
}).catch((err) => {
    console.error(err);
});
}
const [img, setFile] = useState(undefined);
const handleImg = (event) => {
  setFile(event.target.files[0])
};

const uploadFile = (url, file) => {
  let formData = new FormData();
  formData.append('img', file);
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
  axios.put(url, formData, {
    
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
      let products
      if (value.length!==0) {
        products = value.map(product => {
         
          return (
        <div  data-aos-delay='50' style={{width: '25rem'}} key={product.iditem}>
      <Form> 
      <Form.Field
      control={Input}
      label='Titulo'
      placeholder={product.title}
      onChange={handleTitle}/>
    <Form.Field
      control={Input}
      label='Price'
      placeholder={product.price}
      onChange={handlePrice}/>
    <Form.Field
      control={Input}
      label='Stock'
      placeholder={product.stock}
      onChange={handleStock}/>
   <Form.Field
      control={Input}
      label='Categoria'
      placeholder={product.category}
      onChange={handleCategory}/>
    <Form.Field
      control={Input}
      label='Fila Izquierda'
      placeholder={product.f1}
      onChange={handleF1}/>
    <Form.Field
      control={Input}
      label='Fila Derecha'
      placeholder={product.f2}
      onChange={handleF2}/>
      
      <input type="file" onChange={handleImg} accept ="image/*"/>
    <Button onClick={handleSet}>Submit</Button>
  </Form>
       </div>
          );
        });
      }
  return (
    <div style={{background: '#EAEAEA'}}>
      
     <Form.Field
      control={Input}
      label='Buscar por ID'
      placeholder='ID'
      onChange={handleId}/>
    <Button onClick={byId}>Cargar</Button>
    

    {value.length !== 0 ? 
      
      <div>
         <Container style={{ maxWidth: '100%'}}>
          <Row style={{ maxWidth: '100%', justifyContent: 'center'}}>
            {products}
           </Row>
          </Container>
      </div>
     
     : 
      
        null
     
    }
    </div>
  );
};

export default FormPut;

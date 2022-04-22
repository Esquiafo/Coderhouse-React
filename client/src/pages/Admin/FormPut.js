import React, {useState} from "react";
import { Button, Checkbox, Form, Input} from 'semantic-ui-react'
import axios from "axios";
import FireBaseApi from "../../Components/ProductsApi"
import { Link } from "react-router-dom";
import {Image,  Divider, Header, Segment, Label, Table} from "semantic-ui-react"
import Category from '../Category/Category'
import { Container, Row, Col  } from 'react-bootstrap';
import ApiDolar from "../../Components/ApiDolar"

const FormPut = () => {
  const dolarApi = ApiDolar();
  let [value, setValue] = useState('')
  let newValues=[]
  let [id, setId] = useState('')
  const handleId = (event) => {
    setId(event.target.value)
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
  //Put sin fin
  const res = () => axios.put(`http://localhost:5000/api/item/${id}`, { title: title=="" ? value.title : `${title}`, price: price=="" ? value.price : `${price}`, stock: stock=="" ? value.stock : `${stock}`, category: category=="" ? value.category : `${category}`, f1: f1=="" ? value.f1 : `${f1}`, f2: f2=="" ? value.f2 : `${f2}` });
console.log()
const byId= () => {
axios.get(`http://localhost:5000/api/item/id/${id}`)
.then((res) => {
   setValue(res.data)
}).catch((err) => {
    console.error(err);
});
}
      let products
      if (value.length!==0 && dolarApi!==undefined) {
        products = value.map(product => {
          let newF1 = product.f1.split(" ")
          let newF2 = product.f2.split(" ")
          return (
        <div  data-aos-delay='50' style={{width: '25rem'}} key={product.iditem}>
      <Form action={res}> 
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
    <Button onClick={res} >Submit</Button>
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
    <Button onClick={byId}>Submit</Button>
    

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

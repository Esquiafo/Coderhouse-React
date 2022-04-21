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
  let [price, setPrice] = useState('')
  const handlePrice = (event) => {
    setPrice(event.target.value)
  }
  let [f2, setF2] = useState('')
  const handleF2 = (event) => {
    setF2(event.target.value)
  }

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
          
          {/* CAMBIAR ACA */}
          {product.stock >=1 ? (
          <div> 
          <Col  style={{paddingTop: '20px'}}>
          <Segment>
            <div>
            <Header>
            <Link to={`/products/${product.iditem}`}><h6 style={{justifyContent: 'center', display: 'flex'}}>ID: {product.iditem} | {product.title} | Categoria: {product.category}</h6></Link>
            </Header>
            <Divider clearing />
            <Link to={`/products/${product.iditem}`}>
            <Image style={{height: "150px"}} src={`${product.img[0]}`} rounded  centered />
            </Link>
            <Divider clearing />
            {(product.f1!==null && product.f2!==null) ?<Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={1}>{newF1.map(x=>{
            return(
            <div key={x}>
              {x}
            </div>)
          })}
          </Table.Cell>
          <Table.Cell width={1}>{newF2.map(b=>{
            return(
            <div  key={b}>
              {b}
            </div>)
          })}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table> : null }
            <Divider clearing />
            <div>
            <div style={{display: "flex", justifyContent: "center"}}>
            
            <Label style={{alignSelf: "center"}} circular color={'green'} empty key={'green'} /> 
            <p> Stock: {product.stock} | ${product.price*dolarApi}</p>
            </div>
          </div>
          </div>
          </Segment>
          
          </Col> 
          </div> 
          ) : (
            <div> 
            <Col  style={{paddingTop: '20px'}}>
            <Segment>
              <div>
              <Header>
              <Link to={`/products/${product.iditem}`}><h6 style={{justifyContent: 'center', display: 'flex'}}>ID: {product.iditem} | {product.title} | Categoria: {product.category}</h6></Link>
              </Header>
              <Divider clearing />
              <Link to={`/products/${product.iditem}`}>
              <Image style={{height: "150px"}} src={`${product.img[0]}`} rounded  centered />
              </Link>
              <Divider clearing />
              {(product.f1!==null && product.f2!==null) ?<Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={1}>{newF1.map(x=>{
              return(
              <div key={x}>
                {x}
              </div>)
            })}
            </Table.Cell>
            <Table.Cell width={1}>{newF2.map(b=>{
              return(
              <div  key={b}>
                {b}
              </div>)
            })}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table> : null }
              <Divider clearing />
              <div>
              <div style={{display: "flex", justifyContent: "center"}}>
              
              <Label style={{alignSelf: "center"}} circular color={'red'} empty key={'red'} /> 
              <p> Stock: {product.stock} | ${product.price*dolarApi}</p>
              </div>
            </div>
            </div>
            </Segment>
            
            </Col> 
            </div> 
          )}  
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

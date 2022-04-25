import React, {useState} from "react";
import { Button, Checkbox, Form, Input} from 'semantic-ui-react'
import axios from "axios";
import { Link } from "react-router-dom";
import {Image,  Divider, Header, Segment, Label, Table} from "semantic-ui-react"
import { Container, Row, Col  } from 'react-bootstrap';
const FormGet = () => {

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
  console.log(res.data)
   setValue(res.data)
}).catch((err) => {
    console.error(err);
});
}
const byCategory= () => {
  axios.get(`http://localhost:5000/api/item/category/${category}`)
  .then((res) => {
     setValue(res.data)
  }).catch((err) => {
      console.error(err);
  });
  }
  const byPrice= () => {
    axios.get(`http://localhost:5000/api/item/price/${price}`)
    .then((res) => {
       setValue(res.data)
    }).catch((err) => {
        console.error(err);
    });
    }
    const byF2= () => {
      axios.get(`http://localhost:5000/api/item/f2/${f2}`)
      .then((res) => {
         setValue(res.data)
      }).catch((err) => {
          console.error(err);
      });
      }
      let products
      if (value.length!==0) {
        products = value.map(product => {
          console.log(product.img)
          console.log(`http://localhost:5000${product.img}`)
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
            <Image style={{height: "150px"}} src={`http://localhost:5000${product.img}`} rounded  centered />
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
            <p> Stock: {product.stock} | ${product.price}</p>
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
              <Image style={{height: "150px"}} src={`http://localhost:5000${product.img}`} rounded  centered />
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
              <p> Stock: {product.stock} | ${product.price}</p>
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
    <Form.Field
      control={Input}
      label='Buscar por Categoria'
      placeholder='Categoria'
      onChange={handleCategory}/>
    <Button onClick={byCategory}>Submit</Button>
    <Form.Field
      control={Input}
      label='Buscar por Precio'
      placeholder='Precio'
      onChange={handlePrice}/>
    <Button onClick={byPrice}>Submit</Button>
    <Form.Field
      control={Input}
      label='Buscar por Lista derecha'
      placeholder='Lista derecha'
      onChange={handleF2}/>
    <Button onClick={byF2}>Submit</Button>

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

export default FormGet;

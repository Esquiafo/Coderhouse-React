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
  let [telefono, setTelefono] = useState('')
  const handleTelefono = (event) => {
    setTelefono(event.target.value)
  }
  let [user, setUser] = useState('')
  const handleUser = (event) => {
    setUser(event.target.value)
  }
  let [email, setEmail] = useState('')
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

const byId= () => {
axios.get(`http://localhost:5000/api/order/id/${id}`)
.then((res) => {
  console.log(res.data)
   setValue(res.data)
}).catch((err) => {
    console.error(err);
});
}
const byTelefono= () => {
  axios.get(`http://localhost:5000/api/order/telefono/${telefono}`)
  .then((res) => {
     setValue(res.data)
  }).catch((err) => {
      console.error(err);
  });
  }
  const byUser= () => {
    axios.get(`http://localhost:5000/api/order/user/${user}`)
    .then((res) => {
       setValue(res.data)
    }).catch((err) => {
        console.error(err);
    });
    }
    const byEmail= () => {
      axios.get(`http://localhost:5000/api/order/email/${email}`)
      .then((res) => {
         setValue(res.data)
      }).catch((err) => {
          console.error(err);
      });
      }
      let products
      if (value.length!==0 ) {
        products = value.map(product => {
          return (
        <div  data-aos-delay='50' style={{width: '25rem'}} key={product.idorder}>
          
          {/* CAMBIAR ACA */}
          {product.stock >=1 ? (
          <div> 
          <Col  style={{paddingTop: '20px'}}>
          <Segment>
            <div>
            <Header>
            <Link to={`/products/${product.idorder}`}><h6 style={{justifyContent: 'center', display: 'flex'}}>ID: {product.idorder} | {product.title} | Categoria: {product.telefono}</h6></Link>
            </Header>
            <Divider clearing />
            <Link to={`/products/${product.idorder}`}>
            </Link>
            <Divider clearing />
            <Header> {email}</Header>
            <Divider clearing />
            <div>
            <div style={{display: "flex", justifyContent: "center"}}>
            
            <Label style={{alignSelf: "center"}} circular color={'green'} empty key={'green'} /> 
            <p> Stock: {product.stock} | ${product.user}</p>
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
              <Link to={`/products/${product.idorder}`}><h6 style={{justifyContent: 'center', display: 'flex'}}>ID: {product.idorder} | {product.title} | Categoria: {product.telefono}</h6></Link>
              </Header>
              <Divider clearing />
              <Link to={`/products/${product.idorder}`}>
              </Link>
              <Divider clearing />
              <Header>{email}</Header>
              <Divider clearing />
              <div>
              <div style={{display: "flex", justifyContent: "center"}}>
              
              <Label style={{alignSelf: "center"}} circular color={'red'} empty key={'red'} /> 
              <p> Stock: {product.stock} | ${product.user}</p>
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
      onChange={handleTelefono}/>
    <Button onClick={byTelefono}>Submit</Button>
    <Form.Field
      control={Input}
      label='Buscar por Precio'
      placeholder='Precio'
      onChange={handleUser}/>
    <Button onClick={byUser}>Submit</Button>
    <Form.Field
      control={Input}
      label='Buscar por Lista derecha'
      placeholder='Lista derecha'
      onChange={handleEmail}/>
    <Button onClick={byEmail}>Submit</Button>

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

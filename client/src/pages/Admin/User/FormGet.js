import React, {useState, useEffect} from "react";
import { Button, Checkbox, Form, Input} from 'semantic-ui-react'
import SingleOrder from '../../Products/SingleOrder'
import Index from '../../Index/Index'
import axios from "axios";
import { Link } from "react-router-dom";
import {Card,  Divider, Header, Segment, Label, Table} from "semantic-ui-react"
import { Container, Row, Col  } from 'react-bootstrap';
const FormGet = () => {
  let [value, setValue] = useState('')
  let [newValue, setNewValues]=useState('')
  let purchaseList
  let [id, setId] = useState('')
  const handleId = (event) => {
    setId(event.target.value)
  }

  let [email, setEmail] = useState('')
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  let [telefono, setTelefono] = useState('')
  const handleTelefono = (event) => {
    setTelefono(event.target.value)
  }
  let [documento, setDocumento] = useState('')
  const handleDocumento = (event) => {
    setDocumento(event.target.value)
  }

  const byId= () => {
  axios.get(`http://localhost:5000/api/user/id/${id}`)
  .then((res) => {

     setValue(res.data)
  }).catch((err) => {
      console.error(err);
  });
  }
  const byEmail= () => {
    axios.get(`http://localhost:5000/api/user/email/${email}`)
    .then((res) => {
       setValue(res.data)
    }).catch((err) => {
        console.error(err);
    });
    }
  const byTelefono= () => {
      axios.get(`http://localhost:5000/api/user/telefono/${telefono}`)
      .then((res) => {
         setValue(res.data)
      }).catch((err) => {
          console.error(err);
      });
      }
  const byDocumento= () => {
        axios.get(`http://localhost:5000/api/user/documento/${documento}`)
        .then((res) => {
           setValue(res.data)
        }).catch((err) => {
            console.error(err);
        });
        }

      let products
      
      if (value.length!==0 ) {
        products = value.map(product => {
          purchaseList = product.compras.split(" ")

           
            
          return (
        <div  data-aos-delay='50' style={{width: '25rem'}} key={product.iduser}>
          <Col  style={{paddingTop: '20px'}}>
          <Card>
          <Card.Description>User ID: {product.iduser}</Card.Description>
          <Card.Header> Nombre y Apellido: {product.nombre} {product.apellido}</Card.Header> 
          <Card.Description>Email: {product.email}</Card.Description>
          <Card.Description>Telefono: {product.telefono}</Card.Description>
          <Card.Meta>Direccion: {product.direccion} | CP: {product.cp}</Card.Meta>
          {purchaseList.map(x=>{
            return(
              <div key={x}>
                <SingleOrder order={x} />
              </div>
            )}
            )}
          

          </Card>

          </Col>
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
      label='Buscar por Email'
      placeholder='Email'
      onChange={handleEmail}/>
    <Button onClick={byEmail}>Submit</Button>
    <Form.Field
      control={Input}
      label='Buscar por Telefono'
      placeholder='Telefono'
      onChange={handleTelefono}/>
    <Button onClick={byTelefono}>Submit</Button>
    <Form.Field
      control={Input}
      label='Buscar por Lista Documento'
      placeholder='Lista Documento'
      onChange={handleDocumento}/>
    <Button onClick={byDocumento}>Submit</Button>

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

import React, {useState} from "react";
import { Button, Checkbox, Form, Input} from 'semantic-ui-react'
import axios from "axios";
import { Container, Row, Col  } from 'react-bootstrap';

const FormPut = () => {
  let [value, setValue] = useState('')
  
  let [id, setId] = useState('')
  const handleId = (event) => {
    setId(event.target.value)
  }
  let url =`http://localhost:5000/api/order/id/${id}`;

const byId= () => {
axios.get(`http://localhost:5000/api/order/id/${id}`)
.then((res) => {
   setValue(res.data)
}).catch((err) => {
    console.error(err);
});
}
let [email, setEmail] = useState('')
const handleEmail = (event) => {
  setEmail(event.target.value)
}
let [items, setItems] = useState('')
const handleItems = (event) => {
  setItems(event.target.value)
}
let [total, setTotal] = useState('')
const handleTotal = (event) => {
  setTotal(event.target.value)
}

let [phone, setPhone] = useState('')
const handlePhone = (event) => {
  setPhone(event.target.value)
}
let [estado, setEstado] = useState('')
const handleEstado = (event) => {
  setEstado(event.target.value)
}
let [cantidad, setCantidad] = useState('')
const handleCantidad = (event) => {
  setCantidad(event.target.value)
}


const putData = () => {

axios.put(url, 
  {        
    items: items=="" ? value.items : `${items}`,
    phone: phone=="" ? value.phone : `${phone}`, 
    total: total=="" ? value.total : `${total}`, 
    email: email=="" ? value.email : `${email}`, 
    cantidad: cantidad=="" ? value.cantidad : `${cantidad}`, 
    estado: estado=="" ? value.estado : `${estado}`
  }
  
  
  ).then((response) => {
    console.log(response)
  }).catch((error) => {
    console.log(error)
  });
};
      let products
      if (value.length!==0) {
        products = value.map(product => {
         
          return (
            <div  data-aos-delay='50' style={{width: '25rem'}}>
          <Form> 
        <Form.Field
          control={Input}
          label='Items'
          placeholder={product.items}
          onChange={handleItems}/>
        <Form.Field
          control={Input}
          label='Cantidad'
          placeholder={product.cantidad}
          onChange={handleCantidad}/>
        <Form.Field
          control={Input}
          label='Phone'
          placeholder={product.phone}
          onChange={handlePhone}/>
    
        <Form.Field
          control={Input}
          label='Total'
          placeholder={product.total}
          onChange={handleTotal}/>
    
        <Form.Field
          control={Input}
          label='Email'
          placeholder={product.email}
          onChange={handleEmail}/>

              
        <Form.Field
          control={Input}
          label='Estado'
          placeholder={product.estado}
          onChange={handleEstado}/>



        <Button onClick={putData}>Submit</Button>
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
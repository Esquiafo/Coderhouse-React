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
  let url =`http://localhost:5000/api/user/id/${id}`;

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
let [direccion, setDireccion] = useState('')
const handleDireccion = (event) => {
  setDireccion(event.target.value)
}
let [nombre, setNombre] = useState('')
const handleNombre = (event) => {
  setNombre(event.target.value)
}
let [documento, setDocumento] = useState('')
const handleDocumento = (event) => {
  setDocumento(event.target.value)
}

let [apellido, setApellido] = useState('')
const handleApellido = (event) => {
  setApellido(event.target.value)
}
let [email, setEmail] = useState('')
const handleEmail = (event) => {
  setEmail(event.target.value)
}
let [cp, setCp] = useState('')
const handleCp = (event) => {
  setCp(event.target.value)
}
let [contraseña, setContraseña] = useState('')
const handleContraseña = (event) => {
  setContraseña(event.target.value)
}
let [telefono, setTelefono] = useState('')
const handleTelefono = (event) => {
  setTelefono(event.target.value)
}
let [checkPassword, setCheckPassword] = useState('')
const handleCheckPassword = (event) => {
  setCheckPassword(event.target.value)
}


const putData = () => {

axios.put(url, 
  {        
    nombre: nombre=="" ? value.nombre : `${nombre}`,
    apellido: apellido=="" ? value.apellido : `${apellido}`, 
    documento: documento=="" ? value.documento : `${documento}`, 
    direccion: direccion=="" ? value.direccion : `${direccion}`, 
    cp: cp=="" ? value.cp : `${cp}`, 
    email: email=="" ? value.email : `${email}`,
    contraseña: contraseña=="" ? value.contraseña : `${contraseña}`,
    telefono: telefono=="" ? value.telefono : `${telefono}`
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
          label='Nombre'
          placeholder={product.nombre}
          onChange={handleNombre}/>

        <Form.Field
          control={Input}
          label='Apellido'
          placeholder={product.apellido}
          onChange={handleApellido}/>
    
        <Form.Field
          control={Input}
          label='Documento'
          placeholder={product.documento}
          onChange={handleDocumento}/>
    
        <Form.Field
          control={Input}
          label='Direccion'
          placeholder={product.direccion}
          onChange={handleDireccion}/>
        <Form.Field
          control={Input}
          label='Codigo Postal'
          placeholder={product.cp}
          onChange={handleCp}/>
    
        <Form.Field
          control={Input}
          label='Correo Electronico'
          placeholder={product.email}
          onChange={handleEmail}/>
          <Form.Field
          control={Input}
          label='Telefono'
          placeholder={product.telefono}
          onChange={handleTelefono}/>
    
          <Form.Field
          control={Input}
          label='Contraseña'
          placeholder={product.contraseña}
          onChange={handleContraseña}/>
    
          <Form.Field
          control={Input}
          label='Check Contraseña'
          onChange={handleCheckPassword}/>
          
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
    <Form.Field
      control={Input}
      label='Buscar por Email'
      placeholder='Email'
      onChange={handleEmail}/>
    <Button onClick={byEmail}>Cargar</Button>
    

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
import React, {useState, useEffect} from "react";
import { Row, Container, Col, Form, Input, Button } from "semantic-ui-react";
import axios from 'axios'

const SignUp = () => {

  let [value, setValue] = useState('')
  let [color, setColor] = useState(false)

  let [nombre, setNombre] = useState('')
  const handleNombre = (event) => {
    setNombre(event.target.value)
  }
  let [apellido, setApellido] = useState('')
  const handleApellido = (event) => {
    setApellido(event.target.value)
  }
  let [documento, setDocumentos] = useState('')
  const handleDocumentos = (event) => {
    setDocumentos(event.target.value)
  }
  
  let [direccion, setDireccion] = useState('')
  const handleDireccion = (event) => {
    setDireccion(event.target.value)
  }
  let [telefono, setTelefono] = useState('')
  const handleTelefono = (event) => {
    setTelefono(event.target.value)
  }
  let [email, setEmail] = useState('')
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  let [contraseña, setContraseña] = useState('')
  const handleContraseña = (event) => {
    setContraseña(event.target.value)
  }
  const handleCheckContraseña = (event) => {
    // if(contraseña == event.target.value){setColor(true)}
  }


const uploadFile = () => {

  axios.post(`http://localhost:5000/api/user`, {
           
      apellido: apellido=="" ? value.apellido : `${apellido}`,
      direccion: direccion=="" ? value.direccion : `${direccion}`, 
      documento: documento=="" ? value.documento : `${documento}`, 
      nombre: nombre=="" ? value.nombre : `${nombre}`, 
      email: email=="" ? value.email : `${email}`, 
      telefono: telefono=="" ? value.telefono : `${telefono}`,
      contraseña: contraseña=="" ? value.contraseña : `${contraseña}`
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
      label='Apellido'
      
      onChange={handleApellido}/>
    <Form.Field
      control={Input}
      label='Direccion'
   
      onChange={handleDireccion}/>
    <Form.Field
      control={Input}
      label='Documentos'
   
      onChange={handleDocumentos}/>
   <Form.Field
      control={Input}
      label='Nombre'
   
      onChange={handleNombre}/>
    <Form.Field
      control={Input}
      label='Email'
   
      onChange={handleEmail}/>

    <Form.Field
      control={Input}
      label='Telefono'
   
      onChange={handleTelefono}/>

    <Form.Field
      control={Input}
      label='Contraseña'
   
      onChange={handleContraseña}/>
      <Form.Field
      control={Input}
      label='Contraseña Check'
   
      onChange={handleCheckContraseña}/>
      
     
    <Button onClick={uploadFile}>Submit</Button>
  </Form>
       </div>
          );
        
      }
  


export default SignUp;

import React, {useState} from "react";
import { Button, Checkbox, Form, Input} from 'semantic-ui-react'
import axios from "axios";


const FormPost = () => {

  let [value, setValue] = useState('')
  let newValues=[]
  let [id, setId] = useState('')
  const handleId = (event) => {
    setId(event.target.value)
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


const postData = () => {
 
  axios.post(`http://localhost:5000/api/user`, 
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
     
          return (
        <div  data-aos-delay='50' style={{width: '25rem'}}>
      <Form> 
    <Form.Field
      control={Input}
      label='Nombre'
      onChange={handleNombre}/>

    <Form.Field
      control={Input}
      label='Apellido'
   
      onChange={handleApellido}/>

    <Form.Field
      control={Input}
      label='Documento'
      onChange={handleDocumento}/>

    <Form.Field
      control={Input}
      label='Direccion'
   
      onChange={handleDireccion}/>
    <Form.Field
      control={Input}
      label='Codigo Postal'
      onChange={handleCp}/>

    <Form.Field
      control={Input}
      label='Correo Electronico'
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
    <Button onClick={postData}>Submit</Button>
  </Form>
       </div>
          );
        
      }
  


export default FormPost;

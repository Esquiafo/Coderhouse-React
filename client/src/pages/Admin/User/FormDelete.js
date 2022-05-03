import React, {useState} from "react";
import { Button, Checkbox, Form, Input} from 'semantic-ui-react'
import axios from "axios";

const FormDelete = () => {
  let [id, setId] = useState('')
  const handleId = (event) => {
    setId(event.target.value)
  }
  

const byId= () => {
axios.delete(`http://localhost:5000/api/user/id/${id}`)
.then((res) => {
    console.log(res)
}).catch((err) => {
    console.error(err);
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
    </div>
  );
};

export default FormDelete;


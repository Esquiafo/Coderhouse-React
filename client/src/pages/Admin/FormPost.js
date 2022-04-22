import React, {useState} from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from "axios"
const FormPost = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/item",
        formData
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div style={{background: '#EAEAEA'}}>
    <Form action="http://localhost:5000/api/item" method="post"> 
    <Form.Field>
      <label for="title">Titulo</label>
      <input id="title" type="text" name="title" placeholder='title' />
    </Form.Field>
    <Form.Field>
      <label for="price">Precio</label>
      <input id="price" type="text" name="price" placeholder='price' />
    </Form.Field>
    <Form.Field>
      <label for="stock">Stock</label>
      <input id="stock" type="text" name="stock" placeholder='stock' />
    </Form.Field>
    <Form.Field>
      <label for="category">Category</label>
      <input id="category" type="text" name="category" placeholder='category' />
    </Form.Field>
    <Form.Field>
      <label for="f1">Tabla Izquierda</label>
      <input id="f1" type="text" name="f1" placeholder='f1' />
    </Form.Field>
    <Form.Field>
      <label for="f2">Tabla Derecha</label>
      <input id="f2" type="text" name="f2" placeholder='f2' />
    </Form.Field>
    <Form.Field>
    <label for="img">Imagen</label>
    <input type="file" onChange={saveFile} multiple />
    <button onClick={uploadFile}>Upload</button>
    </Form.Field> 
   
    <Button type='submit' value="OK">Submit</Button>
  </Form>
    </div>
  );
};

export default FormPost;

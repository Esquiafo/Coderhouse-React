import {Link, useParams} from "react-router-dom"
import finalData from "../../Components/ProductsApi.js"
import React, { useContext, useEffect, useState } from 'react';
import CartContext from "../../Context/CartContext"
import { Image, Segment, Icon, Divider, Header, Table, Label, Grid } from 'semantic-ui-react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import ApiDolar from '../../Components/ApiDolar'
import axios from "axios"
const ItemDetail = () => {
  const dolarApi = ApiDolar()
  const [filter, setFilter] = useState('')
  useEffect(() => {
    ultimateData();
  },[]);
  const ultimateData= () => {
    axios.get(`http://localhost:5000/api/item/id/${value.productId}`)
    .then((res) => {
       setFilter(res.data)
    }).catch((err) => {
        console.error(err);
    });
    }
  const value = useParams();
  const [contador, setCounter] = useState(1);
  let count=-1
  
  const context = useContext(CartContext);
  const increase = (h)=>{
    setCounter(contador== h.target.value ? contador+0 : contador+1)
  }
  const decrease = ()=>{
    setCounter(contador==1 ? contador+0 : contador-1)
  }
  const onAdd = () =>{
    context.addItems({img: filter.img, id: filter.iditem, cantidad: contador, price:filter.price*dolarApi, title: filter.title, stock: filter.stock }) 
  }

let products
if (filter.length!==0 && dolarApi!==undefined) {
  products = filter.map(product => {
    let newF1 = product.f1.split(" ")
    let newF2 = product.f2.split(" ")
    return (
  <div  data-aos-delay='50' style={{width: '25rem'}} key={product.iditem}>

    {/* CAMBIAR ACA */}
    {product.stock >=1 ? (
    <div> 

      <Col xs={12} md={6} >
      <Header>
      <Link to={`/products/${product.iditem}`}><h6 style={{justifyContent: 'center', display: 'flex'}}>ID: {product.iditem} | {product.title} | Categoria: {product.category}</h6></Link>
      </Header>
      <Divider clearing />
      <Link to={`/products/${product.iditem}`}>
      <Image style={{height: "150px"}} src={`${product.img[0]}`} rounded  centered />
      </Link>
      <Divider clearing />
      
      <h3>Cantidad:  <Button variant="outline-dark"  onClick={decrease}>-</Button>  {contador}   <Button variant="outline-dark" value={filter.stock} onClick={increase}>+</Button> <a style={{color: "grey"}}>(Disponibles: {filter.stock}) </a></h3>
      
      <Link to="/cart" >
      <Button style={{width: '100%', background: '#1C5D99',  border: 'none'}} variant="success" onClick={onAdd} >Agregar al carrito</Button>
      </Link>
      </Col>
    
      <Col xs={12} md={6} >
    {(product.f1!==null && product.f2!==null) ?

      
      <Table definition style={{height: '100%'}}>
<Table.Body>
  <Table.Row>
    <Table.Cell width={1}>{newF1.map(x=>{
      return(
      <div style={{margin: 'auto'}} key={x}>
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
</Table>
     
  :
  null 
  }
 
 </Col>


    </div> 
    ) : (
      <div> 
    
      No hay stock del producto

      </div> 
    )}  

 </div>
    );
  });
}
  return (
    <div>
      {filter.length!==0 ? (
       
        <div>
                      <Container>
          <Row xs={6}>
            {products}
            </Row>
            </Container>
        </div>
        
      ) : (<div>
    vacio      
      </div>)}
    </div>
  )
     
  

};

export default ItemDetail;
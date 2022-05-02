import FireBaseApi from "../../Components/ProductsApi"
import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import {Image,  Divider, Header, Segment, Label, Table} from "semantic-ui-react"
import Category from '../Category/Category'
import { Container, Row, Col  } from 'react-bootstrap';
import ApiDolar from "../../Components/ApiDolar"
import AOS from 'aos';
import axios from 'axios';
// import UserApi from "../../Components/UserApi"
AOS.init();
// className="justify-content-md-center"
const Items = () => {
  const dolarApi = ApiDolar();
  const [value, setValue] = useState('')
  useEffect(() => {
    apiGetData();
  },[]);
  const apiGetData= () => {
    axios.get(`http://localhost:5000/api/item/`)
    .then((res) => {
       setValue(res.data)
    }).catch((err) => {
        console.error(err);
    });
    }
  let products
  if (value.length!==0 && dolarApi!==undefined) {
    products = value.map(product => {
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
        <Link to={`/products/${product.iditem}`}><h6 style={{justifyContent: 'center', display: 'flex'}}> {product.title} | Categoria: {product.category}</h6></Link>
        </Header>
        <Divider clearing />
        <Link to={`./products/${product.iditem}`}>
        <Image style={{height: "150px"}} src={`http://localhost:5000${product.img}`} rounded  centered />
        </Link>
        <Divider clearing />
        <div>
        <div style={{display: "flex", justifyContent: "center"}}>
        
        <Label style={{alignSelf: "center"}} circular color={'green'} empty key={'green'} /> 
        <p> Stock: {product.stock} | ${product.price*dolarApi}</p>
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
          <div>
          <div style={{display: "flex", justifyContent: "center"}}>
          
          <Label style={{alignSelf: "center"}} circular color={'red'} empty key={'red'} /> 
          <p> Stock: {product.stock} | ${product.price*dolarApi}</p>
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
  
    <Container style={{
      maxWidth: '100%',
      paddingRight: '0px',
      paddingLeft: '0px',
      marginRight: 'auto',
      marginLeft: 'auto',
      background: '#EAEAEA'
    }}>
      <Row>
      <Col md={2}> <Category /> </Col>
      {value===undefined ? (
        <div className="d-flex col-md-12  justify-content-center">
          <br></br>
        <div style={{width: "100px",  height: "100px"}}  className="spinner-border" role="status">
          <span  className="visually-hidden">Loading...</span>
        </div>
        </div>
      ) : (
        <Col md={10}>
          <Container style={{ maxWidth: '100%'}}>
          <Row style={{ maxWidth: '100%', justifyContent: 'center'}}>
            {products}
           </Row>
          </Container>

        </Col>
      )}
    </Row>
    </Container>
 
  );
};

export default Items;

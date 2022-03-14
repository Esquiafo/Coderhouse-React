import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom"
import { Row, Container, Col } from "react-bootstrap";
import IndexCategory from "../Category/IndexCategory"
import IndexItem from "../Products/IndexItem";
const Home = () => {
  return (
    <div style={{background: '#EAEAEA'}}>
     <Container>
       <Row>
         
       <Link to={`/leocapone@hotmail.com/xL7p2tdpWIwHADXsIJYl`}><h6 style={{justifyContent: 'center', display: 'flex'}}>A</h6></Link>
         <Col><IndexItem /></Col>
         <Col><IndexCategory /></Col>
       </Row>
     </Container>
    </div>
  );
};

export default Home;

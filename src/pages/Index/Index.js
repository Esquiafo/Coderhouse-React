import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import CategoryIn from "../Category/IndexCategory"
const Home = () => {
  
  
  return (
    <div>
     <h1>INDEX</h1>
     <Container>
       <Row xs={1}>
         <Col>CARROUSEL</Col>
         <Col><CategoryIn /></Col>
       </Row>
     </Container>
    </div>
  );
};

export default Home;

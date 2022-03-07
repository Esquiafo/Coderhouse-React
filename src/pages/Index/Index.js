import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import CategoryIn from "../Category/IndexCategory"
import IndexItem from "../Products/IndexItem";
const Home = () => {
  
  
  return (
    <div>
     <Container>
       <Row>
         <Col><IndexItem /></Col>
         <Col><CategoryIn /></Col>
       </Row>
     </Container>
    </div>
  );
};

export default Home;

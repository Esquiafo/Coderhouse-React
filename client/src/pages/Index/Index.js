import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom"
import { Row, Container, Col } from "react-bootstrap";
import IndexCategory from "../Category/IndexCategory"
import IndexItem from "../Products/IndexItem";

const Home = () => {
  return (
    <div style={{background: '#EAEAEA'}}>
            <h1>Project Home</h1>
      {/* Link to List.js */}
      <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
      </Link>
     <Container>
       <Row>
         <Col><IndexItem /></Col>
         <Col><IndexCategory /></Col>
       </Row>
     </Container>
    </div>
  );
};

export default Home;

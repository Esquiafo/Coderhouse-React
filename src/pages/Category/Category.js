import data from "../../Components/ProductsApi"
import { Link } from "react-router-dom";
import { Container, Row, Col, Button  } from 'react-bootstrap';
import { Dropdown, Menu, Sidebar, Segment, Icon, Header, Image } from "semantic-ui-react";

const Category = () => {
  const test = data()
  const newArrCat = []
  let showCategory;
  if (data()!==undefined) {
    test.map(a => newArrCat.push(a.category));
    const filterCategory = [...new Set(newArrCat)];
    showCategory = filterCategory.map(x=>{
      return(
        <div style={{justifyContent: "center", paddingTop: "10px"}} key={x}>
          <Col>
          <Segment style={{width: "125px"}}>
          <Link to={`/category/${x}`}>
                {x}
           </Link>
          </Segment>
          </Col>

           
        </div>
      )
    })
  }



  return (
    <div >
      {test!==undefined ? (

          <Container>
            <Row xs={3} md={1}>
            {showCategory}
            </Row>
          </Container>

      ) : (
     
        <h1>Cargando</h1>
     
      )}
    </div>
  );
};

export default Category;

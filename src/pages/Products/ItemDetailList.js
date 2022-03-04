import FireBaseApi from "../../Components/ProductsApi"
import { Link } from "react-router-dom";
import {Image,  Divider, Header, Segment, Label} from "semantic-ui-react"
import Category from '../Category/Category'
import { Container, Row, Col  } from 'react-bootstrap';
import AOS from 'aos';
AOS.init();
// className="justify-content-md-center"
const Items = () => {
  const data = FireBaseApi()
  let products
  if (data!==undefined) {
    products = data.map(product => {
      return (
    <div  data-aos-delay='50' data-aos='fade-up' data-aos-offset='100' style={{width: '15rem'}} key={product.id}>
      
      
     

      <Col style={{paddingTop: '20px'}}>
      <Segment>
      <Header>
      {product.stock >=1 ? (
        <Link to={`products/${product.id}`}><h6 style={{justifyContent: 'center', display: 'flex'}}>{product.title}</h6></Link>
      ) : (<h6 style={{justifyContent: 'center', display: 'flex'}}>{product.title}</h6>)}  
      </Header>
      <Divider clearing />
      <Image style={{height: "150px"}} src={`${product.img}`} rounded  centered />
      <Divider clearing />

      {product.stock >=1 ? ( 
      <div>
        <div style={{display: "flex", justifyContent: "center"}}>
        
        <Label style={{alignSelf: "center"}} circular color={'green'} empty key={'green'} /> 
        <p> En stock | ${product.price}</p>
        </div>
      </div>
      
      
      ) : (
      <div>
        <div style={{display: "flex", justifyContent: "center"}}>
        <Label style={{alignSelf: "center"}} circular color={'red'} empty key={'red'} /> 
        <p> Sin stock | ${product.price}</p>
        </div>
      </div>
      )}

  </Segment>
      
        
      </Col> 

   
       
         
     
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
    }}>
      <Row>
      <Col md={1}> <Category /> </Col>
      {data===undefined ? (
        <div>
          Cargando
        </div>
      ) : (
        <Col md={11}>
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

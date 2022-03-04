import {useParams} from "react-router-dom"
import finalData from "../../Components/ProductsApi"
import { Link } from "react-router-dom";
import {Image,  Segment, Label, Header, Divider, Table} from "semantic-ui-react"
import Category from "./Category";
import {Container, Row, Col} from 'react-bootstrap'
const SingleCategory = () => {
  const filterCategory = finalData()
  const value = useParams();
  const newArr=[]
  if (filterCategory!==undefined) {
    filterCategory.filter(b=>b.category==value.categoryId ? newArr.push(b) : null)
  }
  const lastFilter = newArr.map(x=> {
    return (
      <div  data-aos-delay='50' data-aos='fade-up' data-aos-offset='100' style={{width: '15rem'}} key={x.id}>
      
      
     

      <Col style={{paddingTop: '20px'}}>
      <Segment>
      <Header>
      {x.stock >=1 ? (
        <Link to={`/products/${x.id}`}><h6>{x.title}</h6></Link>
      ) : (<h6>{x.title}</h6>)}  
      </Header>
      <Divider clearing />
      <Image style={{height: "150px"}} src={`${x.img}`} rounded  centered />
      <Divider clearing />

      {x.stock >=1 ? ( 
      <div>
        <div style={{display: "flex", justifyContent: "center"}}>
        <Label style={{alignSelf: "center"}} circular color={'green'} empty key={'green'} /> 
        <p> En stock / ${x.price}</p>
        </div>
      </div>
      
      ) : (
        <div>
        <div style={{display: "flex", justifyContent: "center"}}>
        <Label style={{alignSelf: "center"}} circular color={'red'} empty key={'red'} /> 
        <p> Sin stock / ${x.price}</p>
        </div>
      </div>
      )}

  </Segment>
      
        
      </Col> 

   
       
         
     
   </div>
    )
  })
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
      {filterCategory==undefined ? (
        <div>
          Cargando
        </div>
      ) : (
        <Col md={11}>
          <Container style={{ maxWidth: '100%'}}>
          <Row style={{ maxWidth: '100%', justifyContent: 'center'}}>
            {lastFilter}
           </Row>
          </Container>
        </Col>
      )}
    </Row>
    </Container>
  
  )
};

export default SingleCategory;
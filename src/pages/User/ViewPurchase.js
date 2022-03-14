import {Link, useParams} from "react-router-dom"
import OrderApi from "../../Components/OrderApi";
import { Input, Image, Form, Step, Icon, Label, Segment, Header } from 'semantic-ui-react';
import { Container, Row, Col, Button } from 'react-bootstrap';


const ViewPurchase = (props) =>{
    const value = useParams();
    const order = OrderApi();
    let container = []
    let showContainer
    if (order !==undefined) {
        container = order.filter(x=>x.id == value.purchaseId)
        showContainer = container[0].items.map(x=> {
            return(
                <div key={x.id}>
                   <Segment style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>

<Container>
  <Row style={{justifyContent: "center"}}>
   <Col xs={6} sm={6} md={4} lg={3} style={{display: 'flex',paddingTop: '10px', justifyContent: 'center' }}><Image size='medium' src={`${x.img[0]}`} rounded /></Col>

   <Col xs={6} sm={6} md={4} lg={3} className="text-break" style={{display: 'flex',paddingTop: '10px', justifyContent: 'center', marginTop: 'auto',   marginBottom: 'auto'}}><h2>{x.title}</h2></Col>


   <Col sm={6} md={6} lg={3} style={{display: 'flex',paddingTop: '10px', justifyContent: 'center', marginTop: 'auto',   marginBottom: 'auto'}}><h2><Label tag size={'big'} as='a'>${(x.price)}</Label></h2></Col>
   <Col sm={6} md={6} lg={3} style={{display: 'flex',paddingTop: '10px', justifyContent: 'center', marginTop: 'auto',   marginBottom: 'auto'}}><h2>Cantidad: {x.cantidad}</h2></Col>

 



   </Row></Container>
   </Segment>
 
                </div>
            )
        })
    }
    console.log()
return(
    <div>
        {order !==undefined ? (
           <div>
                <h1>Numero de compra: {value.purchaseId}</h1>
                <h1>Usuario: {value.userId}</h1>
                <h1>Estado de compra: Preparando envio</h1>
                {showContainer}
            </div>
        ) : (
            <div>
                <h1>Cargando</h1>
            </div>
        )}
    </div>
)

}
export default ViewPurchase;
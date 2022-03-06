import data from "../../Components/ProductsApi"
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Accordion  } from 'react-bootstrap';
import { Dropdown, Menu, Sidebar, Segment, Icon, Header, Image, List } from "semantic-ui-react";

const IndexCategory = () => {
  const test = data()
  const newCatMarca = []
  let arr
  let keya=0;
  let showCategory;
  if (data()!==undefined) {

    test.map(a => newCatMarca.push({category: a.category, img: a.img[1]}));

    newCatMarca.map(x=>{
           if (arr==undefined) {
               arr=[]
               var obj = {};
               obj[x.category] = [x.img];
               arr.push(obj);
           }else{
               arr.map(b=>{
                   if (b[x.category]!==undefined) {
                       b[x.category].push(x.img)
                       b[x.category]=[...new Set(b[x.category])]
                   }else{
                       
                       b[x.category]= [x.img];
                   }
               })
           }
      })
    showCategory = arr.map(b=>{
      keya++
      return(
        <div  key={b} >
       
       
        {arr.map((items, index) => {
  return (
  
 <div key={index}>
    <Container>
    <Row xs={3} md={6} style={{display: 'flex', justifyContent: 'center'}}>
 
   
    {Object.keys(items).map((index) => {
      return (
        
        <div style={{margin: '20px 20px 20px 20px', textAlign: 'center'}} key={index}>
           
           <Col>
         { index!==undefined ? (    
           <h2><Link to={`/category/${index}`}>{index}</Link></h2>      
          ) : (
            null
          )}
   
           {items[index].map(x=>{
             return(
               <div key={x}>
                 <Link to={`/category/${index}`}>
                   <Image  src={`${x}`} size="tiny" rounded  centered/>
                </Link>
               </div>
             )
           })}

</Col>
          </div>
      )
    })}
  

    </Row>
    </Container>
    </div>
  
  )
})}
      

      </div>
      )
    })
  }



  return (
    <div>
      {test!==undefined ? (

      <div>
          {showCategory} 
      </div>







      ) : (
     
        <h1>Cargando</h1>
     
      )}
    </div>
  );
};

export default IndexCategory;

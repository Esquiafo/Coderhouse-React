import data from "../../Components/ProductsApi"
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Accordion  } from 'react-bootstrap';
import { Dropdown, Menu, Sidebar, Segment, Icon, Header, Image, List } from "semantic-ui-react";

const Category = () => {
  const test = data()
  const newCatMarca = []
  let arr
  let keya=0;
  let showCategory;
  if (data()!==undefined) {

    test.map(a => newCatMarca.push({category: a.category, marca: a.marca}));

    newCatMarca.map(x=>{
           if (arr==undefined) {
               arr=[]
               var obj = {};
               obj[x.category] = [x.marca];
               arr.push(obj);
           }else{
               arr.map(b=>{
                   if (b[x.category]!==undefined) {
                       b[x.category].push(x.marca)
                       b[x.category]=[...new Set(b[x.category])]
                   }else{
                       
                       b[x.category]= [x.marca];
                   }
               })
           }
      })
    showCategory = arr.map(b=>{
      keya++
      return(
        <div key={b} style={{justifyContent: "center", paddingTop: "10px"}} >
          <Menu style={{width: '100%'}} vertical>
        
      
        {arr.map((items, index) => {
  return (
 <div key={index}>
    {Object.keys(items).map((index) => {
      return (
        <div key={index}>
            <Menu.Item>
         { index!==undefined ? (    
            <Menu.Header><Link style={{width: '95%'}} to={`/category/${index}`}>{index}</Link></Menu.Header>          
          ) : (
            null
          )}
         <Menu.Menu>
           {items[index].map(x=>{
             return(
               <div key={x}>
                 
                 <Menu.Item
              name={"x"+`${x}`}
              />
               </div>
             )
           })}
           </Menu.Menu>
          </Menu.Item>
          </div>
      )
    })}
    </div>
  
  )
})}
      

     
      </Menu>
      </div>
      )
    })
  }



  return (
    <div>
      {test!==undefined ? (




<div>{showCategory}</div>






      ) : (
     
        <h1>Cargando</h1>
     
      )}
    </div>
  );
};

export default Category;

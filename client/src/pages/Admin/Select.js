import React from "react";
import {Link} from "react-router-dom";
import { Divider,Button,  Header, Image, Segment } from 'semantic-ui-react'



const Select = () => {
  return (
    <div style={{background: '#EAEAEA',  textAlign: 'center'}}>
    <Segment>
    <Link to="/admin/user"><Button>User</Button></Link>

    <Divider section />

    <Link to="/admin/item"><Button>Item</Button></Link>
    
    <Divider section />

    <Link to="/admin/order"><Button>Order</Button></Link>
    </Segment>
    </div>
  );
};

export default Select;

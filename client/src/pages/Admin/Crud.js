import React from "react";
import {Link, useParams} from "react-router-dom";
import { Divider,Button,  Header, Image, Segment } from 'semantic-ui-react'


const Crud = () => {
 const value = useParams();
  return (
    <div style={{background: '#EAEAEA',  textAlign: 'center'}}>
    <Segment>
    <Link to={`/admin/${value.type}/post`}><Button>Crear</Button></Link>

    <Divider section />

    <Link to={`/admin/${value.type}/get`}><Button>Buscar</Button></Link>
    
    <Divider section />

    <Link to={`/admin/${value.type}/put`}><Button>Actualizar</Button></Link>

    <Divider section />

    <Link to={`/admin/${value.type}/delete`}><Button>Borrar</Button></Link>
    </Segment>
    </div>
  );
};

export default Crud;


import React, {useState} from "react";
import { useHistory} from "react-router-dom";
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'



const Login = () => {
  const history = useHistory();
  let [auth, setAuth] = useState(false);
  function handleClick() {
    if ( auth == true ) {
      history.push('user/login')
    }else{
      alert('Email y/o contraseña erroneos')
    }
  }
  return (
    <div style={{background: '#EAEAEA'}}>
    <Segment >
<Grid columns={2} relaxed='very' stackable>
  <Grid.Column>
    <Form>
      <Form.Input
        icon='user'
        iconPosition='left' 
        label='Username'
        placeholder='Username'
      />
      <Form.Input
        icon='lock'
        iconPosition='left'
        label='Password'
        type='password'
      />

      <Button onClick={handleClick} content='Login' primary />
    </Form>
  </Grid.Column>

  <Grid.Column verticalAlign='middle'>
    <Button content='Sign up' icon='signup' size='big' />
  </Grid.Column>
</Grid>

<Divider vertical>O</Divider>
</Segment>

    </div>
  );
};

export default Login;

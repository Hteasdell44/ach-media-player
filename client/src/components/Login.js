import React, { useState }from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Embed } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutation';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 650 }}>
        
        {/* Login */}
        <div>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' /> Log-in to your account
          </Header>
          <Form size='large'onSubmit={handleFormSubmit}>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
               name="email"
               type="email"
               value={formState.email} 
               onChange={handleChange}
              />
              
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={handleChange}
              />
              <Button color='teal' fluid size='large'  type="submit">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='#'>Sign Up</a>
          </Message>
        </div>

        {/* Embed */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <Grid.Column>
            <Embed
              style={{ width: '600px', height: '400px', paddingTop: 0, paddingBottom: 0 }}
              url={'url'}
              placeholder={'placeholder'}
              source={'source'}
            />
          </Grid.Column>
        </div>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
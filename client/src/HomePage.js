import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Embed } from 'semantic-ui-react';

const HomePage = () => {
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        
        {/* Login */}
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='/logo.png' /> Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='teal' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='#'>Sign Up</a>
        </Message>
      </Grid.Column>
      
      {/* Embed */}
      <div style={{ float: 'left', marginLeft: '700px', width: '650px' }}>
        <Embed
          style={{ width: "500px", height: "300px", paddingTop: 0, paddingBottom: 0 }}
          id={'id'}
          placeholder={'placeholder'}
          source={'source'}
        />
      </div>

    </Grid>
  );
};

export default HomePage;

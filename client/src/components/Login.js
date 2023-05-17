import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Embed } from 'semantic-ui-react';

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
          <Header as='h2' color='purple' textAlign='center'>
            Log-in to your account
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
        </div>

        {/* Embed */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <Embed
            style={{ width: '600px', height: '400px', paddingTop: 0, paddingBottom: 0 }}
            url={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} // Use a dynamic URL here
            placeholder={'http://placekitten.com/600/400'} // Use a dynamic placeholder here
            source={'youtube'} // Use a dynamic source here
          />
        </div>
      </Grid.Column>
    </Grid>
  );
};

export default Login;

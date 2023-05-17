import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const SignUp = () => {
  return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='purple' textAlign='center'>
        <Image/> Sign Up
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='enter e-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='create password'
            type='password'
          />

          <Button color='purple' fluid size='large'>
            Sign Up
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)
  }

export default SignUp
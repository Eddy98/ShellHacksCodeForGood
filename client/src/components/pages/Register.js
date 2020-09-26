import React, { Component } from 'react'
import { Form, Grid, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Register extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column
              className='centered'
              computer={8}
              mobile={14}
              textAlign='left'
            >
              <h1 className='login-title'>Register</h1>
              <Form>
                <Form.Field>
                  <label>Email</label>
                  <input placeholder='email@gmail.com' type='email' required />
                </Form.Field>
                <Form.Field>
                  <label>First Name</label>
                  <input placeholder='First name' type='text' required />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input placeholder='Last name' type='text' required />
                </Form.Field>
                <Form.Field>
                  <label>Phone</label>
                  <input placeholder='888-999-9990' type='number' required />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input type='password' required />
                </Form.Field>
                <div className='p1'>
                  <small>
                    Already have an account? <Link to='/login'>Login</Link>
                  </small>
                </div>
                <Button type='submit'>Submit</Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

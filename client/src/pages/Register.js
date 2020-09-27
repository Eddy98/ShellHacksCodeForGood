import React, { Component } from 'react'
import { Form, Grid, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import firebase from '../firebase'

export default class Register extends Component {
  onRegister = async (e) => {
    const { email, firstName, lastName, phone, password } = e.target.elements

    try {
      await firebase.register(firstName.value, email.value, password.value)
      await firebase.addQuote('Alberto is a bitch')
      this.props.history.replace('/')
    } catch (error) {
      alert(error.message)
    }
  }
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
              <Form onSubmit={this.onRegister}>
                <Form.Field>
                  <label>Email</label>
                  <input placeholder='email@gmail.com' type='email' required name="email" />
                </Form.Field>
                <Form.Field>
                  <label>First Name</label>
                  <input placeholder='First name' type='text' required name="firstName" />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input placeholder='Last name' type='text' required name="lastName" />
                </Form.Field>
                <Form.Field>
                  <label>Phone</label>
                  <input placeholder='888-999-9990' type='text' required name="phone" />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input type='password' required name="password" />
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

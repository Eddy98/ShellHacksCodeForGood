import React, { Component } from 'react'
import { Grid, Container, Form, Checkbox, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import firebase from '../firebase'

export default class Login extends Component {
  login = async (e) => {
    const { email, password } = e.target.elements
    try {
      await firebase.login(email.value, password.value)
      this.props.loginEvent()
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
              <h1 className='login-title'>Login</h1>
              <Form onSubmit={this.login}>
                <Form.Field>
                  <label>Email</label>
                  <input
                    placeholder='email@gmail.com'
                    type='email'
                    name='email'
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    placeholder='password'
                    type='password'
                    name='password'
                  />
                </Form.Field>
                <div className='p1'>
                  <small>
                    Don't have an account? <Link to='/register'>Sign up</Link>
                  </small>
                </div>
                <Button type='submit'>Login</Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

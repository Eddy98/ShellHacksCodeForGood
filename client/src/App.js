import React, { Component } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import * as db from 'firebase'
import user_util from './util/user.util'

import Header from './components/Header'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import EventDashboard from './pages/EventDashboard'


import firebase from './firebase'

class App extends Component {
  state = {
    isInitialized: false,
    userEmail: '',
  }

  componentDidMount() {
    firebase.isInitialized().then((val) => {
      this.setState({ isInitialized: true })
    })
  }

  loginEvent = () => {
    this.setState({userEmail: firebase.getCurrentUsername() })
  }

  // componentDidUpdate() {
  //   this.setState({ userEmail: firebase.getCurrentUsername })
  // }

  render() {
    // console.log(firebase.getCurrentUserInfo());
    return this.state.isInitialized ? (
      <div className='App'>
        <Router>
          <Header userEmail={this.state.userEmail} loginEvent={this.loginEvent}/>
          <Switch>
            <Route exact path='/login' component={(props) => <Login {...props} loginEvent={this.loginEvent}/>} />
            <Route exact path='/register' component={(props) => <Register {...props} loginEvent={this.loginEvent}/>} />
            <Route exact path='/' component={EventDashboard} />
            <Route>
              <Redirect to='/' />
            </Route>
          </Switch>
        </Router>
      </div>
    ) : (
      <div>Loading</div>
    )
  }
}

export default App

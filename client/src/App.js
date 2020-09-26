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
import Login from './components/pages/Login'
import Register from './components/pages/Register'


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route>
              <Redirect to='/' />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App

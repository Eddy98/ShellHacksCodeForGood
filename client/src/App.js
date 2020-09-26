import React, {Component} from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import * as db from 'firebase'
import user_util from './util/user.util'

class App extends Component {


  componentDidMount() {
    user_util.getUsers()
  }

  render() {
    return (
      <div className='App'>
        <h1>holas</h1>
      </div>
    )
  }
}

export default App

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

class App extends Component {
  state = {
    counter: 5,
  }

  componentDidMount() {
    const rootRef = db.firestore().collection("react").doc("react").get().then(doc => {
      if (doc.exists) {
          console.log("Document data:", doc.data());
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
    console.log(rootRef);
  }

  render() {
    return (
      <div className='App'>
        <h1>{this.state.counter}</h1>
      </div>
    )
  }
}

export default App

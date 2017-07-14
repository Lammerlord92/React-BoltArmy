import React, { Component } from 'react';
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools';
import logo from './logo.svg';
import './App.css';
import ActualUnit from './ActualUnit.js';
//import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    const {counter} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React + MobX</h2>
        </div>

        <ActualUnit/>
      </div>
    );
  }
}

export default observer(App);

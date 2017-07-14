import React, { Component } from 'react';
import { observer } from 'mobx-react'
import logo from './logo.svg';
import './App.css';
import ActualUnit from './ActualUnit.js';

class App extends Component {
  render() {
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

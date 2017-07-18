import React, { Component } from 'react';
import { observer } from 'mobx-react'
import logo from './logo.svg';
import './App.css';
import ArmyList from './ArmyList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React + MobX</h2>
        </div>
        <div id="ProfileSheet" className="container">
            <ArmyList/>
        </div>
      </div>
    );
  }
}

export default observer(App);

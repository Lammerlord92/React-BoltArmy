import React, { Component } from 'react';
import { observer } from 'mobx-react'
import logo from './logo.svg';
import './App.css';
import ArmyList from './ArmyList.js';
import AddingUnitComponent from './AddingUnitComponent.js';
//DataClass
import VarGeneralUnitSheet from './dataClass/GeneralUnitSheet.js';
import VarInfantryUnitData from './dataClass/InfantryUnitData.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React + MobX</h2>
        </div>
        <div id="content" className="row">
            <div id="AvaliableUnits" className="col-sm-3">
                <AddingUnitComponent VarGeneralUnitSheet={VarGeneralUnitSheet}   InfantryUnitData={VarInfantryUnitData}/>
            </div>
            <div id="ProfileSheet" className="col-sm-9">
                <ArmyList  InfantryUnitData={VarInfantryUnitData} />
            </div>
        </div>
      </div>
    );
  }
}

export default observer(App);

import React,{Component} from 'react';
import { observer } from 'mobx-react'
import InfantryUnitComponent from './dataComponents/InfantryUnitSubcomponent/InfantryUnitComponent.js';
//import { observer } from 'mobx-react';

class ArmyList extends Component {
  render() {
    return (
        <div className="panel-group">
          <div className="panel panel-success">
            <div className="panel-heading">
                <h2>HQ</h2>
            </div>
            <div className="panel-body"></div>
          </div>
          <div className="panel panel-success">
            <div className="panel-heading">
                <h2>Infantería</h2>
            </div>
            <div className="panel-body">
                <InfantryUnitComponent  VarGeneralUnitSheet={this.props.VarGeneralUnitSheet} UnitData={this.props.InfantryUnitData}/>
            </div>
          </div>
        </div>
    );
  }
}

export default observer(ArmyList);

import React,{Component} from 'react';
import { observer } from 'mobx-react'
import InfantryUnitComponent from './dataComponents/InfantryUnitComponent.js';
//import { observer } from 'mobx-react';

class ArmyList extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-sm-12">
              <h2>HQ</h2>
          </div>
          <div className="col-sm-12">
              <h2>Infantería</h2>
              <InfantryUnitComponent UnitData={this.props.InfantryUnitData}/>
          </div>
        </div>
    );
  }
}

export default observer(ArmyList);

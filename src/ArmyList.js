import React,{Component} from 'react';
import { observer } from 'mobx-react'
import InfantryUnitComponent from './InfantryUnitComponent.js';
//import { observer } from 'mobx-react';

class ArmyList extends Component {
  render() {
    return (
        <div class="row">
          <div class="col-sm-12">
              <h2>HQ</h2>
          </div>
          <div class="col-sm-12">
              <h2>Infantería</h2>
              <InfantryUnitComponent />
          </div>
        </div>
    );
  }
}

export default observer(ArmyList);

import React,{Component} from 'react';
import { observer } from 'mobx-react'
import ArmyList from './ArmyList.js';
//import { observer } from 'mobx-react';

class ActualUnit extends Component {

  render() {
    return (
      <div id="ProfileSheet" className="container">
        <ArmyList />
      </div>
    );
  }
}

export default observer(ActualUnit);

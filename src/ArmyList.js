import React,{Component} from 'react';
import { observer } from 'mobx-react'
import ArmyListUnit from './ArmyListUnit.js';
//import { observer } from 'mobx-react';

class ArmyList extends Component {

  render() {
    return (
        <ArmyListUnit />
    );
  }
}

export default observer(ArmyList);

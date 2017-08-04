import React,{Component} from 'react';
import { observer } from 'mobx-react';
import HQUnitComponent from './platoonComponents/HQUnitComponent.js';
import InfantryUnitComponent from './platoonComponents/InfantryUnitComponent.js';
import SpecialUnitComponent from './platoonComponents/SpecialUnitComponent.js';
//import { observer } from 'mobx-react';

class ArmyList extends Component {
  render() {
    return (
        <div className="panel-group">
          <div className="panel panel-success">
            <div className="panel-heading">
                <h2>HQ</h2>
            </div>
            <div className="panel-body">
                <HQUnitComponent VarGeneralUnitSheet={this.props.VarGeneralUnitSheet} UnitData={this.props.HQUnitData}/>
            </div>
            <div className="panel-footer">
                Total: {this.props.HQUnitData.costeTotal}
            </div>
          </div>
          <div className="panel panel-success">
            <div className="panel-heading">
                <h2>Infantería</h2>
            </div>
            <div className="panel-footer">
                Total: {this.props.InfantryUnitData.costeInfanteria}
            </div>
            <div className="panel-body">
                <InfantryUnitComponent  VarGeneralUnitSheet={this.props.VarGeneralUnitSheet} UnitData={this.props.InfantryUnitData}/>
            </div>
            <div className="panel-footer">
                Total: {this.props.InfantryUnitData.costeInfanteria}
            </div>
          </div>
          <div className="panel panel-success">
            <div className="panel-heading">
                <h2>Armas de apoyo</h2>
            </div>
            <div className="panel-body">
                <SpecialUnitComponent VarGeneralUnitSheet={this.props.VarGeneralUnitSheet} UnitData={this.props.SpecialUnitData}/>
            </div>
            <div className="panel-footer">
                Total: {this.props.SpecialUnitData.costeTotal}
            </div>
          </div>
        </div>
    );
  }
}

export default observer(ArmyList);

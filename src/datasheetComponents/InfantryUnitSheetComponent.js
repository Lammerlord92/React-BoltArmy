import React, { Component } from 'react';
import { observer } from 'mobx-react';


class InfantryUnitSheetComponent extends Component {
  añadeUnidad(event){
    console.log(event);
    this.props.añadeUnidad(this.props.InfantryUnitData);
  }
  render() {
      return(
        <button type="button" className="btn-circle btn-default" onClick={this.añadeUnidad.bind(this)}>  <img src={this.props.InfantryUnitData.icono} alt={this.props.InfantryUnitData.nombre} className="img-circle img-responsive"/>
        </button>
      )
  }
}
export default InfantryUnitSheetComponent;

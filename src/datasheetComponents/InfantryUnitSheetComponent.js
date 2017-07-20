//Iconos del menú lateral para las unidades de infantería
import React, { Component } from 'react';
import { observer } from 'mobx-react';


class InfantryUnitSheetComponent extends Component {
  añadeUnidad(event){
    this.props.añadeUnidad(this.props.InfantryUnitData);
  }
  render() {
      return(
        //<button type="button" className="btn-circle btn-default"
        //onClick={this.añadeUnidad.bind(this)}>
            <img src={this.props.InfantryUnitData.icono}
                alt={this.props.InfantryUnitData.nombre}
                onClick={this.añadeUnidad.bind(this)}
                className="img-circle img-responsive"/>
      //  </button>
      )
  }
}
export default InfantryUnitSheetComponent;

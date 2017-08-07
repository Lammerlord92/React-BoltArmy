//TODO//Iconos del menú lateral para los vehículos
import React, { Component } from 'react';
import { observer } from 'mobx-react';


class VehicleUnitSheetComponent extends Component {
  añadeVehiculo(event){
    this.props.añadeVehiculo(this.props.UnitData);
  }
  render() {
      return(
        //<button type="button" className="btn-circle btn-default"
        //onClick={this.añadeUnidad.bind(this)}>
            <img src={this.props.UnitData.icono}
                alt={this.props.UnitData.nombre}
                onClick={this.añadeVehiculo.bind(this)}
                className="img-circle img-responsive"/>
      //  </button>
      )
  }
}
export default VehicleUnitSheetComponent;

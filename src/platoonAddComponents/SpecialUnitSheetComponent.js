//TODO//Iconos del menú lateral para las unidades especiales
import React, { Component } from 'react';
import { observer } from 'mobx-react';


class SpecialUnitSheetComponent extends Component {
  añadeUnidadEspecial(event){
    this.props.añadeUnidadEspecial(this.props.UnitData);
  }
  render() {
      return(
        //<button type="button" className="btn-circle btn-default"
        //onClick={this.añadeUnidad.bind(this)}>
            <img src={this.props.UnitData.icono}
                alt={this.props.UnitData.nombre}
                onClick={this.añadeUnidadEspecial.bind(this)}
                className="img-circle img-responsive"/>
      //  </button>
      )
  }
}
export default SpecialUnitSheetComponent;

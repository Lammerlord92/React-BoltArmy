//TODO//Iconos del menú lateral para las unidades de HQ
import React, { Component } from 'react';
import { observer } from 'mobx-react';


class HQUnitSheetComponent extends Component {
  añadeUnidad(event){
    this.props.añadeUnidad(this.props.HQUnitData);
  }
  render() {
      return(
        //<button type="button" className="btn-circle btn-default"
        //onClick={this.añadeUnidad.bind(this)}>
            <img src={this.props.HQUnitData.icono}
                alt={this.props.HQUnitData.nombre}
                onClick={this.añadeUnidad.bind(this)}
                className="img-circle img-responsive"/>
      //  </button>
      )
  }
}
export default HQUnitSheetComponent;

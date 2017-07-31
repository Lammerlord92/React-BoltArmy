import React, { Component } from 'react';

class OpcionReglaUnidad extends Component{
  constructor(props) {
          super(props);
          this.state = {clase:"img-circle img-responsive disable-image"};
      }
  claseRegla(){
    var claseAux="img-circle img-responsive";
    if(!this.props.rule.activo){
      claseAux+=" disable-image";
    }
    this.state.clase=claseAux;
    //Obliga a refrescar el componente permitiendo activar
    //o desactivar la regla especial
    this.forceUpdate();
  }
  pulsarRegla(event){
    this.props.pulsarRegla(this.props.unitIndex,this.props.ruleIndex);
    this.claseRegla();
  }
  render() {
    // var clase="img-circle img-responsive";
    // if(!this.props.rule.activo){
    //   clase+=" disable-image";
    // }else{
    //   clase+=" enable-image";
    // }
    return(
        <img onClick={this.pulsarRegla.bind(this)}
        src={this.props.rule.icono} alt={this.props.rule.nombre}
        className={this.state.clase}/>
    )
  }
}

export default OpcionReglaUnidad;

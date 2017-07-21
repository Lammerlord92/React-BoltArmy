import React, { Component } from 'react';

class OpcionReglaUnidad extends Component{
  pulsarRegla(event){
    this.props.pulsarRegla(this.props.unitIndex,this.props.ruleIndex);
  }
  render() {
    var clase="img-circle img-responsive";
    if(!this.props.rule.activo){clase+=" disable-image";}
    return(
        <img onClick={this.pulsarRegla.bind(this)}
        src={this.props.rule.icono} alt={this.props.rule.nombre}
        className={clase}/>
    )
  }
}

export default OpcionReglaUnidad;

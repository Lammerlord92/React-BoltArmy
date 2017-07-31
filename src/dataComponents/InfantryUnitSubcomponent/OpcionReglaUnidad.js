import React, { Component } from 'react';

class OpcionReglaUnidad extends Component{
  // constructor() {
  //   clase="img-circle img-responsive";
  // }
  // claseRegla(){
  //   this.clase="img-circle img-responsive";
  //   console.log(this.props.rule.activo);
  //   if(!this.props.rule.activo){
  //     this.clase+=" disable-image";
  //   }else{
  //     this.clase+=" enable-image";
  //   }
  //   console.log(clase);
  //   return clase;
  // }
  pulsarRegla(event){
    this.props.pulsarRegla(this.props.unitIndex,this.props.ruleIndex);
    this.render();
  }
  render() {
    var clase="img-circle img-responsive";
    if(!this.props.rule.activo){
      clase+=" disable-image";
    }else{
      clase+=" enable-image";
    }
    return(
        <img onClick={this.pulsarRegla.bind(this)}
        src={this.props.rule.icono} alt={this.props.rule.nombre}
        className={clase}/>
    )
  }
}

export default OpcionReglaUnidad;

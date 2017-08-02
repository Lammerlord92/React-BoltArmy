//TODO Realizar componente para seleccionar el arma del sargento
import React, { Component } from 'react';

class OpcionSargento extends Component{
  cambiaArmaSargento(event){
    this.props.cambiaArmaSargento(this.props.unidad,event.target.id);
    this.forceUpdate();
  }
  render() {
    let botonesArmas=[];
    const addBotones=this.props.unit.opcionesSargentoUnidad.forEach(
      (value,index)=>{
        var boton=<img id={index} key={index} onClick={this.cambiaArmaSargento.bind(this)} className="img-circle img-responsive disable-image col-md-3 center-block"
          src={value.icono} alt={value.nombre} />;
        if(index===this.props.unit.opcionSargentoEscogida) {boton=<img key={index} className="img-circle img-responsive col-md-3 center-block"
          src={value.icono} alt={value.nombre} />;}
        botonesArmas.push(boton);
      }
    );
    return(
      <div className="col-sm-12 text-center">
          <div className="col-sm-12 text-center">Arma del sargento</div>
          <div className="col-sm-12 text-center">
            {botonesArmas}
          </div>
        </div>
    )
  }
}

export default OpcionSargento;

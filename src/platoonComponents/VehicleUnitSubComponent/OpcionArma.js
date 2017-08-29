//TODO Realizar componente para seleccionar el arma del sargento
import React, { Component } from 'react';

class OpcionArma extends Component{
  cambiaArmaSeleccionada(event){
    this.props.cambiaArmaSeleccionada(this.props.unit,this.props.opcion,event.target.id);
    this.forceUpdate();
  }
  render() {

    let botonesArmas=[];
    const addBotones=this.props.opciones.forEach(
      (value,index)=>{
        var boton=<img id={index} key={this.props.opcion+value.nombre+index} onClick={this.cambiaArmaSeleccionada.bind(this)} className="img-circle img-responsive disable-image col-md-3 center-block"
          src={value.icono} alt={value.nombre} />;
        if(index===this.props.opcionEscogida) {boton=<img key={this.props.opcion+value.nombre+index} className="img-circle img-responsive col-md-3 center-block"
          src={value.icono} alt={value.nombre} />;}
        botonesArmas.push(boton);
      }
    );
    return(
      <div className="col-sm-12 text-center">
          <div className="col-sm-12 text-center">{this.props.nombre}</div>
          <div className="col-sm-12 text-center">
            {botonesArmas}
          </div>
        </div>
    )
  }
}

export default OpcionArma;

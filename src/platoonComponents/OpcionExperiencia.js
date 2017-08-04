//Componente para seleccionar la experiencia de la unidad
import React, { Component } from 'react';

class OpcionExperiencia extends Component{
  cambiaExperiencia(event){
    this.props.cambiaExperiencia(this.props.indUnidad,event.target.id);
    this.forceUpdate();
  }
  render() {
    let botonesExp=[];
    const addBotones=this.props.opciones.forEach(
      (value,index)=>{
        var boton=<img id={index} key={index} onClick={this.cambiaExperiencia.bind(this)} className="img-circle img-responsive disable-image col-md-3 center-block"
          src={value.icono} alt={value.nombre} />;
        if(index===this.props.opcionEscogida) {boton=<img key={index} className="img-circle img-responsive col-md-3 center-block"
          src={value.icono} alt={value.nombre} />;}
        botonesExp.push(boton);
      }
    );
    return(
      <div className="col-sm-12 text-center">
          <div className="col-sm-12 text-center"><h5>Selección de veteranía</h5></div>
          <div className="col-sm-12 text-center  center-block">
            {botonesExp}
          </div>
        </div>
    )
  }
}

export default OpcionExperiencia;

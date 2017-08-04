import React, { Component } from 'react';

class SeleccionaRango extends Component{
  render() {
    let botonesExp=[];
    const addBotones=this.props.opciones.forEach(
      (value,index)=>{
        var boton=<img id={index} key={index} className="img-circle img-responsive col-md-3 center-block"
          src={value.icono} alt={value.nombre} />;
        botonesExp.push(boton);
      }
    );
    return(
      <div className="col-sm-12 text-center">
          <div className="col-sm-12 text-center"><h5>Armas disponibles</h5></div>
          <div className="col-sm-12 text-center  center-block">
            {botonesExp}
          </div>
        </div>
    )
  }
}

export default SeleccionaRango;

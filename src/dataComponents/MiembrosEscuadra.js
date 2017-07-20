//TODO cambiar métodos por añadirMiembro o algo así
//TODO Poner una barra de progreso en el número de miembros??
import React, { Component } from 'react';

class MiembrosEscuadra extends Component{
  añadeFusilero(event){
    this.props.añadeFusilero(this.props.indiceUn);
  }
  quitaFusilero(event){
    this.props.quitaFusilero(this.props.indiceUn);
  }
  render() {
      return(
        <div id="miembrosEscuadra" className="col-sm-12 text-center">
          <h4>{this.props.unit.numeroFusiles}/{this.props.unit.capEscuadra}</h4>
            <p>
              <button onClick={this.añadeFusilero.bind(this)} className="btn btn-success" disabled={!this.props.unit.habilitaAñadeFusilero}> + </button>
              <button onClick={this.quitaFusilero.bind(this)} className="btn btn-danger" disabled={!this.props.unit.habilitaQuitaFusilero}> - </button>
            </p>
        </div>
      )
  }
}

export default MiembrosEscuadra;

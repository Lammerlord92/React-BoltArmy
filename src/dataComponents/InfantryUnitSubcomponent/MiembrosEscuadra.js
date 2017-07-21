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
          <h4>
            {this.props.unit.numeroFusiles}/{this.props.unit.capEscuadra}{' '}
              <button onClick={this.añadeFusilero.bind(this)} className="btn btn-success btn-xs" disabled={!this.props.unit.habilitaAñadeFusilero}> + </button>
              <button onClick={this.quitaFusilero.bind(this)} className="btn btn-danger btn-xs" disabled={!this.props.unit.habilitaQuitaFusilero}> - </button>
          </h4>
        </div>
      )
  }
}

export default MiembrosEscuadra;

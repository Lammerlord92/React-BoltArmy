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
        <img src="https://firebasestorage.googleapis.com/v0/b/armybadatabase.appspot.com/o/Ability_Reinforce_Squad.png?alt=media&token=8cf9b6c1-0056-4012-a727-93e754950502" alt="" className="col-xs-6 col-sm-4 col-lg-2 img-responsive"/>
          <h4 className="col-xs-6 col-sm-8 col-lg-10 text-center">
            {this.props.unit.numeroFusiles}/{this.props.unit.capEscuadra}{' '}
              <button onClick={this.añadeFusilero.bind(this)} className="btn btn-success btn-xs" disabled={!this.props.unit.habilitaAñadeFusilero}> + </button>
              <button onClick={this.quitaFusilero.bind(this)} className="btn btn-danger btn-xs" disabled={!this.props.unit.habilitaQuitaFusilero}> - </button>
          </h4>
        </div>
      )
  }
}

export default MiembrosEscuadra;

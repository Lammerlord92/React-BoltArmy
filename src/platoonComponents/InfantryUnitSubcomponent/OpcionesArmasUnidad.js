//TODO poner un if para el caso en el que no haya ninguna regla
import React, { Component } from 'react';
import OpcionArmaUnidad from './OpcionArmaUnidad.js';

class OpcionesArmasUnidad extends Component{
  render() {
    let armas_div=[];

    const llenar_armas_div = this.props.opcionesArmasUnidad.forEach(
        (value,index)=>{
          armas_div.push(<OpcionArmaUnidad key={index} opArma={value} indiceA={index} unidad={this.props.indiceUn}
            addArma={(indice_u,indice_a,evento_d)=>this.props.unit.addArma(indice_u,indice_a,evento_d)}
            quitaArma={(indice_u,indice_a,evento_d)=>this.props.unit.quitaArma(indice_u,indice_a,evento_d)}
            />);
         }
      );
      return(
        <div className="col-sm-12 text-center">
          <div className="col-sm-12 text-center">Opciones de armas</div>
          <div className="col-sm-12 text-center">
            {armas_div}
          </div>
        </div>
      )
  }
}

export default OpcionesArmasUnidad;

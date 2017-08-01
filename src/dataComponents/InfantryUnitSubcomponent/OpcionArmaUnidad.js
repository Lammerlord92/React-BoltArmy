import React, { Component } from 'react';

class OpcionArmaUnidad extends Component{
  addArma(event){
    this.props.addArma(this.props.unidad,this.props.indiceA);
    this.forceUpdate();
  }
  quitaArma(event){
    this.props.quitaArma(this.props.unidad,this.props.indiceA);
    this.forceUpdate();
  }
  render() {
    let botonesArmas=[];
    const cupos=this.props.opArma.cupos;
    const cuposOcupados=this.props.opArma.cuposOcupados;
    for(var i=0;i<cupos;i++){
      if(i<cuposOcupados){
        botonesArmas.push(<img key={i} onClick={this.quitaArma.bind(this)} className="img-circle img-responsive col-md-3"
          src={this.props.opArma.icono} alt={this.props.opArma.nombre} />
        )
      }else if(this.props.opArma.activo){
        botonesArmas.push(<img key={i} onClick={this.addArma.bind(this)} className="img-circle img-responsive disable-image col-md-3"
          src={this.props.opArma.icono} alt={this.props.opArma.nombre} />
        )
      }
    }
    return(
        <div>
          {botonesArmas}
        </div>
    )
  }
}

export default OpcionArmaUnidad;

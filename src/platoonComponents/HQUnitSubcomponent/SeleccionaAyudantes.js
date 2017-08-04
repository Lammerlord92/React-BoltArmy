import React, { Component } from 'react';

class SeleccionaAyudantes extends Component{
  addAyudante(event){
    this.props.addAyudante(this.props.indUnidad);
    this.forceUpdate();
  }
  quitaAyudante(event){
    this.props.quitaAyudante(this.props.indUnidad);
    this.forceUpdate();
  }
  render() {
    let botonesAyudantes=[];
    botonesAyudantes.push(<img key={i} className="img-circle img-responsive col-md-3 center-block"
      src={this.props.iconoOf} alt="Oficial" />);
    const cupos=this.props.maxAyudantes;
    const cuposOcupados=this.props.numAyudantes;
    for(var i=0;i<cupos;i++){
      if(i<cuposOcupados){
        botonesAyudantes.push(<img key={i} onClick={this.quitaAyudante.bind(this)} className="img-circle img-responsive col-md-3 center-block"
          src={this.props.iconosAyudantes} alt="Quita ayudante" />
        )
      }else{
        botonesAyudantes.push(<img key={i} onClick={this.addAyudante.bind(this)} className="img-circle img-responsive disable-image col-md-3 center-block"
          src={this.props.iconosAyudantes} alt="Añade ayudante"  />
        )
      }
    }
    return(
      <div className="col-sm-12 text-center">
        <div className="col-sm-12 text-center">
          {botonesAyudantes}
        </div>
      </div>
    )
  }
}

export default SeleccionaAyudantes;

import React, { Component } from 'react';

class EliminaUnidad extends Component{
  eliminaUnidad(event){
    this.props.eliminaUnidad(this.props.indiceUn);
  }
  render() {
      return(
        <div>
          <button onClick={this.eliminaUnidad.bind(this)} className="btn btn-danger"> X </button>
        </div>
      )
  }
}

export default EliminaUnidad;

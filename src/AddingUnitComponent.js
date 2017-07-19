//Componente izquierdo para añadir unidades.
import React, { Component } from 'react';
import { observer } from 'mobx-react';


class AddingUnitComponent extends Component {
  render() {
    let infantry_div=[];
    const llenar_infantry_div = this.props.VarGeneralUnitSheet.unidadesDisponibles.forEach(
        //valores e índice del array
        //onClick={this.props.InfantryUnitData.añadeUnidad(value)}this.añadeFusilero.bind(
        //TODO Cambiarlo para que añada unidades al componente que se le ha pasado cuando se pulse en la imagen
        (value,index)=>(
            infantry_div.push(
              <div key={index} className="col-sm-4">
              <button type="button" className="btn-circle btn-default">  <img src={value.icono} alt="Icono {value.nombre}" className="img-circle img-responsive"
                onClick=""/> </button>
              </div>
            )
          )
      );
    return (
      <div>
        <div id="infantry_div" className="row">
          <h5>Infantería</h5>
            {infantry_div}
        </div>
      </div>
    );
  }
  añadeUnidadInfanteria(event){
    this.props.añadeUnidad(this.props.indiceUn);
  }

}

export default observer(AddingUnitComponent);

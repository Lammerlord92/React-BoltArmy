//Componente izquierdo para añadir unidades.
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import InfantryUnitSheetComponent from './platoonAddComponents/InfantryUnitSheetComponent';
import SpecialUnitSheetComponent from './platoonAddComponents/SpecialUnitSheetComponent';

class AddingUnitComponent extends Component {
  render() {
    let infantry_div=[];
    let specialUnit_div=[];
    const llenar_infantry_div = this.props.VarGeneralUnitSheet.unidadesDisponibles.forEach(
        //valores e índice del array
        //onClick={this.props.InfantryUnitData.añadeUnidad(value)}this.añadeFusilero.bind(
        //TODO Cambiarlo para que añada unidades al componente que se le ha pasado cuando se pulse en la imagen
        (value,index)=>(
            infantry_div.push(
              <div key={index} className="col-sm-4 col-lg-2">
                  <InfantryUnitSheetComponent InfantryUnitData={value}
                  añadeUnidad={
                    (value,evento_d)=>{this.props.InfantryUnitData.añadeUnidad(value,evento_d)}
                  }/>
              </div>
            )
          )
      );
      const llenar_specialUnit_div = this.props.VarGeneralUnitSheet.unidadesEspecialesDisponibles.forEach(
          //valores e índice del array
          //onClick={this.props.InfantryUnitData.añadeUnidad(value)}this.añadeFusilero.bind(
          //TODO Cambiarlo para que añada unidades al componente que se le ha pasado cuando se pulse en la imagen
          (value,index)=>(
              specialUnit_div.push(
                <div key={index} className="col-sm-4 col-lg-2">
                    <SpecialUnitSheetComponent UnitData={value}
                    añadeUnidadEspecial={
                      (value,evento_d)=>{this.props.SpecialUnitData.añadeUnidadEspecial(value,evento_d)}
                    }/>
                </div>
              )
            )
        );

    return (
      <div className="panel-group">
        <div id="hq_div" className="panel panel-success">
          <div className="panel-heading">
            <h5 className="panel-title">HQ</h5>
          </div>
          <div className="panel-body">
            {infantry_div}
            </div>
        </div>
        <div id="infantry_div" className="panel panel-success">
          <div className="panel-heading">
            <h5 className="panel-title">Infantería</h5>
          </div>
          <div className="panel-body">
            {infantry_div}
            </div>
        </div>
        <div id="special_div" className="panel panel-success">
          <div className="panel-heading">
            <h5 className="panel-title">Apoyo</h5>
          </div>
          <div className="panel-body">
            {specialUnit_div}
            </div>
        </div>
      </div>
    );
  }
}

export default observer(AddingUnitComponent);

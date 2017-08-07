//Componente izquierdo para añadir unidades.
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import HQUnitSheetComponent from './platoonAddComponents/HQUnitSheetComponent';
import InfantryUnitSheetComponent from './platoonAddComponents/InfantryUnitSheetComponent';
import SpecialUnitSheetComponent from './platoonAddComponents/SpecialUnitSheetComponent';
import VehicleUnitSheetComponent from './platoonAddComponents/VehicleSheetComponent';

class AddingUnitComponent extends Component {
  render() {

    let hq_div=[];
    let infantry_div=[];
    let specialUnit_div=[];
    let vehicleUnit_div=[];

    const llenar_hq_div = this.props.VarGeneralUnitSheet.hQDisponibles.forEach(
        //valores e índice del array
        //onClick={this.props.InfantryUnitData.añadeUnidad(value)}this.añadeFusilero.bind(
        //TODO Cambiarlo para que añada unidades al componente que se le ha pasado cuando se pulse en la imagen
        (value,index)=>(
            hq_div.push(
              <div key={index} className="col-sm-4 col-lg-2">
                  <HQUnitSheetComponent HQUnitData={value}
                  añadeUnidad={
                    (value,evento_d)=>{this.props.HQUnitData.añadeUnidad(value,evento_d)}
                  }/>
              </div>
            )
          )
      );

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

        const llenar_vehicleUnit_div = this.props.VarGeneralUnitSheet.vehiculosDisponibles.forEach(
            //valores e índice del array
            //onClick={this.props.InfantryUnitData.añadeUnidad(value)}this.añadeFusilero.bind(
            //TODO Cambiarlo para que añada unidades al componente que se le ha pasado cuando se pulse en la imagen
            (value,index)=>(
                vehicleUnit_div.push(
                  <div key={index} className="col-sm-4 col-lg-2">
                      <VehicleUnitSheetComponent UnitData={value}
                      añadeVehiculo={
                        (value,evento_d)=>{this.props.VehicleUnitData.añadeVehiculo(value,evento_d)}
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
            {hq_div}
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
        <div id="special_div" className="panel panel-success">
          <div className="panel-heading">
            <h5 className="panel-title">Vehículos</h5>
          </div>
          <div className="panel-body">
            {vehicleUnit_div}
            </div>
        </div>
      </div>
    );
  }
}

export default observer(AddingUnitComponent);

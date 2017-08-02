//TODO añadir opciones de arma
//TODO añadir opciones de sargento
//TODO Añadir reglas especiales base
//TODO Añadir reglas especiales opcionales
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import MiembrosEscuadra from './MiembrosEscuadra.js';
import EliminaUnidad from './EliminaUnidad.js';
import OpcionesReglasUnidad from './OpcionesReglasUnidad.js';
import OpcionesArmasUnidad from './OpcionesArmasUnidad.js';
import OpcionSargento from './OpcionSargento.js';


class InfantryUnitComponent extends Component {
  render() {
    let units_div=[];

    const llenar_units_div = this.props.UnitData.unidades.forEach(
        //valores e índice del array
        (value,index)=>(
            units_div.push(
              <div key={index} className="panel panel-warning col-sm-12">

                <div className="panel-heading">
                  <div id="unitDesc" className="row">
                      <div id="iconDiv" className="col-xs-6 col-sm-2 col-lg-1 text-center">
                          <img src={value.icono} alt="Icono granadero" className="img-circle img-responsive"/>
                      </div>

                      <div id="stats" className="col-xs-6 col-sm-8 col-lg-10 text-left">
                          <h5>{value.nombre}</h5>
                          <h6>{value.experiencia}</h6>
                       </div>

                       <div id="eliminaUnidad" className="col-xs-3 col-sm-1 text-center">
                           <EliminaUnidad unitsArray={units_div} indiceUn={index} eliminaUnidad={
                             (index_d,evento_d)=>{this.props.UnitData.eliminaUnidad(index_d,evento_d)}
                             } />
                        </div>
                  </div>
                </div>
                <div className="panel-body">
                  <div id="unitOpt" className="row">
                    <div className="col-sm-4">
                      <p>Arma base: {value.armaBase}</p>
                      <MiembrosEscuadra unit={value} indiceUn={index}
                      añadeFusilero={
                        (index_d,evento_d)=>{this.props.UnitData.añadeFusilero(index_d,evento_d)}
                      }
                      quitaFusilero={
                        (index_d,evento_d)=>{this.props.UnitData.quitaFusilero(index_d,evento_d)}
                      }/>
                      <OpcionSargento unit={this.props.UnitData.unidades[index]} unidad={index}
                      cambiaArmaSargento={(indice_u,indice_a,evento_d)=>this.props.UnitData.cambiaArmaSargento(indice_u,indice_a,evento_d)}/>
                    </div>
                    <div id="armas" className="col-sm-4">
                      <OpcionesArmasUnidad indiceUn={index} unit={this.props.UnitData} opcionesArmasUnidad={value.opcionesArmasUnidad}/>
                    </div>
                    <div id="reglas" className="col-sm-4">
                      <OpcionesReglasUnidad indiceUn={index} unit={this.props.UnitData} opcionesReglasUnidad={value.opcionesReglasUnidad}/>
                    </div>
                  </div>

                </div>

                <div id="profile" className="panel-footer">
                    <h4>Coste de la escuadra: {value.costeEscuadra}</h4>
                </div>

              </div>
            )
         )
      );
    return (
      <div id="units" className="panel-group">
          {units_div}
      </div>
    );
  }
}

export default observer(InfantryUnitComponent);

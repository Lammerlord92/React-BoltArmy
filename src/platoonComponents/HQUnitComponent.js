//TODO Añadir reglas especiales base
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import EliminaUnidad from './EliminaUnidad.js';
import OpcionesReglasUnidad from './OpcionesReglasUnidad.js';
import OpcionExperiencia from './OpcionExperiencia.js';
import SeleccionaRango from './HQUnitSubcomponent/SeleccionaRango.js';
import MostrarArmas from './HQUnitSubcomponent/MostrarArmas.js';


class HQUnitComponent extends Component {
  render() {
    let units_div=[];
    let iconosArmas=[];
    const llenar_units_div = this.props.UnitData.unidades.forEach(
        //valores e índice del array
        (value,index)=>(
          //TODO Colapsar body del panel para ahorrar un poco de espacio en la presentación
            units_div.push(
              <div key={index} className="panel panel-warning col-sm-12">

                <div className="panel-heading">
                  <div id="unitDesc" className="row">
                      <div id="iconDiv" className="col-xs-6 col-sm-2 col-lg-1 text-center">
                          <img src={value.icono} alt={"Icono "+value.nombre} className="img-circle img-responsive"/>
                      </div>

                      <div id="stats" className="col-xs-6 col-sm-8 col-lg-10 text-left">
                          <h5>{value.nombre+" ("+value.opcionesRango[value.rangoEscogido].nombre+")"}</h5>
                          <h6>{value.opcionesRango[value.rangoEscogido].opcionesVeterania[value.veteraniaEscogida].nombre}</h6>
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
                        <h5>Tamaño de escuadra: {value.tamañoEscuadra}</h5>
                        <SeleccionaRango opcionEscogida={value.rangoEscogido} opciones={value.opcionesRango} indUnidad={index}
                        cambiaRango={
                          (indice_u,indice_r,evento_d)=>this.props.UnitData.cambiaRango(indice_u,indice_r)
                        }/>
                        <OpcionExperiencia opcionEscogida={value.veteraniaEscogida} opciones={value.opcionesRango[value.rangoEscogido].opcionesVeterania} indUnidad={index}
                        cambiaExperiencia={
                          (indice_u,indice_v,evento_d)=>this.props.UnitData.cambiaExperiencia(indice_u,indice_v)
                        }/>
                    </div>
                    <div id="armas" className="col-sm-4">
                        <MostrarArmas opciones={value.opcionesArmas}/>
                    </div>
                    <div id="reglas" className="col-sm-4">
                      <OpcionesReglasUnidad indiceUn={index} unit={this.props.UnitData} opcionesReglasUnidad={value.opcionesReglasUnidad}/>
                    </div>
                  </div>
                </div>

                <div id="profile" className="panel-footer">
                    <h4>Coste de la escuadra: {value.coste}</h4>
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

export default observer(HQUnitComponent);

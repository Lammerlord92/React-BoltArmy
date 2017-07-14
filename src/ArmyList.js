import React, { Component } from 'react';
import { observer } from 'mobx-react';
import VarUnitData from './dataClass/UnitData.js';
import MiembrosEscuadra from './MiembrosEscuadra.js';


class ArmyList extends Component {
  render() {
    let units_div=[];
    const llenar_units_div = VarUnitData.unidades.forEach(
        //valores e índice del array
        (value,index)=>(
            units_div.push(
              <div key={index} className="panel panel-success col-sm-6">
                <div className="panel-body">

                  <div id="unitDesc" className="row">
                    <div id="iconDiv" className="col-sm-4 text-center">
                        <img src={value.icono} alt="Icono granadero" className="img-circle img-responsive"/>
                    </div>

                    <div id="stats" className="col-sm-8 text-left">
                        <h3>{value.nombre}</h3>
                        <h4>{value.experiencia}</h4>
                     </div>
                  </div>
                  <div id="unitOpt" className="row">
                      <MiembrosEscuadra unit={value} indiceUn={index}
                      añadeFusilero={
                        (index_d,evento_d)=>{VarUnitData.añadeFusilero(index_d,evento_d)}
                      }
                      quitaFusilero={
                        (index_d,evento_d)=>{VarUnitData.quitaFusilero(index_d,evento_d)}
                      }/>
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



//
//



export default observer(ArmyList);

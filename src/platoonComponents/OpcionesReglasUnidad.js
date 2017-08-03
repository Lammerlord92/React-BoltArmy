import React, { Component } from 'react';
import OpcionReglaUnidad from './OpcionReglaUnidad.js';

class OpcionesReglasUnidad extends Component{
  render() {
    let rules_div=[];
    //TODO para añadir reglas especiales que ya posea la unidad
    // const llenar_rules_div_base = this.props.opcionesReglasUnidad.forEach(
    //     (value,index)=>{
    //         if(value!=null) rules_div.push(
    //           <div key={index} className="col-xs-6 col-sm-6 col-md-4 col-lg-3 text-center">
    //               <ReglaUnidad rule={value} ruleIndex={index} unitIndex={this.props.indiceUn}
    //                 pulsarRegla={
    //                   (index_d,index_e,evento_d)=>
    //                   {this.props.unit.pulsarRegla(index_d,index_e,evento_d)}
    //               }/>
    //           </div>
    //         )
    //      }
    //   );
    const llenar_rules_div_opciones = this.props.opcionesReglasUnidad.forEach(
        (value,index)=>{
            if(value!=null) rules_div.push(
              <div key={index} className="col-xs-6 col-sm-6 col-md-4 col-lg-3 text-center">
                  <OpcionReglaUnidad rule={value} ruleIndex={index} unitIndex={this.props.indiceUn}
                    pulsarRegla={
                      (index_d,index_e,evento_d)=>
                      {this.props.unit.pulsarRegla(index_d,index_e,evento_d)}
                  }/>
              </div>
            )
         }
      );
      return(
        <div className="col-sm-12 text-center">
          <div className="col-sm-12 text-center">Reglas especiales</div>
          <div className="col-sm-12 text-center">
            {rules_div}
          </div>
        </div>
      )
  }
}

export default OpcionesReglasUnidad;

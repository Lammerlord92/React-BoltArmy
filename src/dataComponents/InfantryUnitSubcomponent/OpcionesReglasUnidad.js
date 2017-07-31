//TODO poner un if para el caso en el que no haya ninguna regla
import React, { Component } from 'react';
import OpcionReglaUnidad from './OpcionReglaUnidad.js';

class OpcionesReglasUnidad extends Component{
  render() {
    let rules_div=[];

    const llenar_rules_div = this.props.opcionesReglasUnidad.forEach(
        (value,index)=>{
            if(value!=null) rules_div.push(
              <div key={index} className="col-xs-6 col-sm-6 col-md-4 col-lg-2">
                  <OpcionReglaUnidad rule={value} ruleIndex={index} unitIndex={this.props.indiceUn}
                    pulsarRegla={
                      (index_d,index_e,evento_d)=>
                      {this.props.unit.pulsarRegla(index_d,index_e,evento_d)}
                  }/>
              </div>
            )
         }
      );
      console.log(rules_div);
      return(
        <div className="col-sm-12 text-center">
          {rules_div}
        </div>
      )
  }
}

export default OpcionesReglasUnidad;

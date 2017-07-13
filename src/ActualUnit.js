import React,{Component} from 'react';
import VarUnitData from './dataClass/UnitData.js'
import { observer } from 'mobx-react'

class ActualUnit extends Component {

  render() {
    return (
      <div id="ProfileSheet" className="ProfileSheet">
        <h3>{VarUnitData.nombre}</h3>
        <h4>{VarUnitData.experiencia}</h4>
        <div id="fusileros">
            <img src={VarUnitData.icono} alt="Icono granadero" className="icon"/>
            <h4>{VarUnitData.numeroFusiles}/{VarUnitData.capEscuadra}</h4>
            <p>
              <button onClick={() => VarUnitData.añadeFusilero()} disabled={!VarUnitData.habilitaAñadeFusilero}> +</button>
              <button onClick={() => VarUnitData.quitaFusilero()}  disabled={!VarUnitData.habilitaQuitaFusilero} > - </button>
            </p>
            <h4>Coste de la escuadra: {VarUnitData.costeEscuadra}</h4>
        </div>
      </div>
    );
  }
}

export default observer(ActualUnit);

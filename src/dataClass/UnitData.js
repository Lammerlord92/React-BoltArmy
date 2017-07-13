import {extendObservable} from 'mobx';

import { render}  from 'react-dom';

class UnitData{
  constructor(){
    extendObservable(this,{
      nombre: 'Granaderos',
      experiencia: 'Regulares',
      icono:require('../img/icons/Icon_Granadero.png'),
      capEscuadra: 10,
      minEscuadra: 5,
      cuposOcupados:5,
      numeroFusiles:5,
      costeBase:10,
      costePorFusil:0,
      costeEscuadra:50,
      habilitaAñadeFusilero:true,
      habilitaQuitaFusilero:false
    });
  }
  
  añadeFusilero(){
    this.numeroFusiles++;
    this.añadirMiembro();
  }

  quitaFusilero(){
    this.numeroFusiles--;
    this.quitarMiembro();
  }

  añadirMiembro(){
    this.cuposOcupados++;
    this.habilitaQuitaFusilero=true;
    if(this.cuposOcupados>=this.capEscuadra) this.habilitaAñadeFusilero=false;

    this.calculaCosteEscuadra();
  }

  quitarMiembro(){
    this.cuposOcupados--;
    this.habilitaAñadeFusilero=true;
    if(this.cuposOcupados<=this.minEscuadra) this.habilitaQuitaFusilero=false;

    this.calculaCosteEscuadra();
  }
  calculaCosteEscuadra(){
    this.costeEscuadra=this.cuposOcupados*this.costeBase+this.costePorFusil*this.numeroFusiles;
  }
}


var VarUnitData=new UnitData();
require
export default VarUnitData;

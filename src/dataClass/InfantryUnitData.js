//TODO añadir opciones de arma
//TODO añadir opciones de sargento
//TODO Añadir reglas especiales
//Elementos de infantería de la lista
import {extendObservable} from 'mobx';
//import datos from "../controllers/firebaseController";

class InfantryUnitData{
  constructor(){
//    self=this;
    extendObservable(this,{
        unidades: [],
        armas: []
      });
    }

    añadeUnidad(valorUnidad){
      const auxVal={
          nombre: valorUnidad.nombre,
          experiencia: valorUnidad.experiencia,
          icono:valorUnidad.icono,
          capEscuadra: valorUnidad.capEscuadra,
          minEscuadra: valorUnidad.minEscuadra,
          cuposOcupados:valorUnidad.minEscuadra,
          armaBase:"Fusil",
          numeroFusiles:valorUnidad.minEscuadra,
          costeBase:valorUnidad.costeBase,
          costePorFusil:0,
          costeEscuadra:valorUnidad.minEscuadra*valorUnidad.costeBase,
          habilitaAñadeFusilero:true,
          habilitaQuitaFusilero:false,
          opcionesReglasUnidad:Object.values(valorUnidad.opcionesReglas)
        }
        //TODO Ver como quitar activo de la base de datos y ponerlo aquí
        this.unidades.push(auxVal);
    }

    eliminaUnidad(indice){
      this.unidades.splice(indice,1);
    }


    añadeFusilero(indice){
      this.unidades[indice].numeroFusiles++;
//          value.añadirMiembro();
//          break;

      this.unidades[indice].cuposOcupados++;
      this.unidades[indice].habilitaQuitaFusilero=true;
      if(this.unidades[indice].cuposOcupados>=this.unidades[indice].capEscuadra)
        this.unidades[indice].habilitaAñadeFusilero=false;

      this.calculaCosteEscuadra(indice);
    }

    quitaFusilero(indice){

      this.unidades[indice].numeroFusiles--;
//            this.quitarMiembro();
//              break;
      this.unidades[indice].cuposOcupados--;
      this.unidades[indice].habilitaAñadeFusilero=true;
      if(this.unidades[indice].cuposOcupados<=this.unidades[indice].minEscuadra)
        this.unidades[indice].habilitaQuitaFusilero=false;
      this.calculaCosteEscuadra(indice);
    }

    pulsarRegla(indice_d, indice_e){
      this.unidades[indice_d].opcionesReglasUnidad[indice_e].activo=!this.unidades[indice_d].opcionesReglasUnidad[indice_e].activo;
      this.calculaCosteEscuadra(indice_d);
    }

  // añadirMiembro(){
  //   this.cuposOcupados++;
  //   this.habilitaQuitaFusilero=true;
  //   if(this.cuposOcupados>=this.capEscuadra)
  //     this.habilitaAñadeFusilero=false;
  //
  //   this.calculaCosteEscuadra();
  // }
  //
  // quitarMiembro(){
  //   this.cuposOcupados--;
  //   this.habilitaAñadeFusilero=true;
  //   if(this.cuposOcupados<=this.minEscuadra)
  //     this.habilitaQuitaFusilero=false;
  //
  //   this.calculaCosteEscuadra();
  // }
  calculaCosteEscuadra(index){
    var coste=0;
    //Añadimos el coste de los soldados
    coste+=this.unidades[index].cuposOcupados*this.unidades[index].costeBase
    +this.unidades[index].costePorFusil*this.unidades[index].numeroFusiles;
    //Añadimos coste de las reglas especiales
    this.unidades[index].opcionesReglasUnidad.forEach(
      (value,index)=>{
        if(value.activo){
            if(value.aplicarPorSoldado){
              coste+=value.coste*this.unidades[index].cuposOcupados;
            }else{
              coste+=value.coste;
            }
        }

      }
    )

    this.unidades[index].costeEscuadra=coste;
  }
}


var VarInfantryUnitData=new InfantryUnitData();
export default VarInfantryUnitData;

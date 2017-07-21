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
          opcionesReglasUnidad:new Array(valorUnidad.opcionesReglas)
        }
        console.log(auxVal.opcionesReglasUnidad);
        console.log(this.unidades);
      //TODO Ver como quitar activo de la base de datos y ponerlo aquí
      // valorUnidad.opcionesReglas.forEach(
      //   (value,index)=>{
      //     const valueAux={
      //         coste:value.coste,
      //         aplicarPorSoldado:value.aplicarPorSoldado,
      //         nombre:value.nombre,
      //         activo:false,
      //         icono:value.icono
      //     }
      //     auxVal.opcionesReglasUnidad.push(valueAux);
      //   }
      // )
      this.unidades.push(auxVal);
    }

    eliminaUnidad(indice){
      this.unidades.splice(indice,1);
    }


    añadeFusilero(indice){
      this.unidades.forEach(
        (value,index)=>{
          if(indice===index){
            this.unidades[index].numeroFusiles++;
  //          value.añadirMiembro();
  //          break;

            this.unidades[index].cuposOcupados++;
            this.unidades[index].habilitaQuitaFusilero=true;
            if(this.unidades[index].cuposOcupados>=this.unidades[index].capEscuadra)
              this.unidades[index].habilitaAñadeFusilero=false;

                this.unidades[index].costeEscuadra=this.unidades[index].cuposOcupados*this.unidades[index].costeBase
                +this.unidades[index].costePorFusil*this.unidades[index].numeroFusiles;

          }
        }
      )
    }

    quitaFusilero(indice){
      this.unidades.forEach(
        (value,index)=>{
          if(indice===index){
              this.unidades[index].numeroFusiles--;
  //            this.quitarMiembro();
  //              break;
              this.unidades[index].cuposOcupados--;
              this.unidades[index].habilitaAñadeFusilero=true;
              if(this.unidades[index].cuposOcupados<=this.unidades[index].minEscuadra)
                this.unidades[index].habilitaQuitaFusilero=false;

              this.unidades[index].costeEscuadra=this.unidades[index].cuposOcupados*this.unidades[index].costeBase
              +this.unidades[index].costePorFusil*this.unidades[index].numeroFusiles;
            }
          }
        )
    }

    pulsarRegla(indice_d, indice_e){
      this.unidades.forEach(
        (value,index)=>{
          if(indice_d===index){
            this.unidades[index].opcionesUnidad[indice_e].activo=!this.unidades[index].opcionesUnidad[indice_e].activo;
          }
        }
      )
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
  // calculaCosteEscuadra(){
  //   this.costeEscuadra=this.cuposOcupados*this.costeBase
  //   +this.costePorFusil*this.numeroFusiles;
  // }
}


var VarInfantryUnitData=new InfantryUnitData();
export default VarInfantryUnitData;

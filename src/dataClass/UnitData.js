import {extendObservable} from 'mobx';
import datos from "../controllers/firebaseController";

class UnitData{
  constructor(){
    self=this;
    extendObservable(this,{
      unidades: [
          {
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
          },
          {
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
          }
      ]
    });
    datos.unidadesTabla.once('value').then(
      function(snapshot){
        snapshot.forEach(function(childSnapshot){
          const key=childSnapshot.key;
          const valor=childSnapshot.val();
          // console.log(key);
          // console.log(valor);
          const auxVal={
            nombre: valor.nombre,
            experiencia: valor.experiencia,
            icono:valor.icono,
            capEscuadra: valor.capEscuadra,
            minEscuadra: valor.minEscuadra,
            cuposOcupados:valor.minEscuadra,
            numeroFusiles:valor.minEscuadra,
            costeBase:valor.costeBase,
            costePorFusil:0,
            costeEscuadra:valor.minEscuadra*valor.costeBase,
            habilitaAñadeFusilero:true,
            habilitaQuitaFusilero:false
          }
          self.unidades.push(auxVal);
        })
      }
    )
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


var VarUnitData=new UnitData();
export default VarUnitData;

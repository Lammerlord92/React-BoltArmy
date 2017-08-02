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
      var opcionesReglas=[];
      var opcionesArma=[];
      var opcionesSargento=[];

      if(valorUnidad.opcionesReglas) opcionesReglas=Object.values(valorUnidad.opcionesReglas);
      if(valorUnidad.opcionesSargento) opcionesSargento=Object.values(valorUnidad.opcionesSargento);
      if(valorUnidad.opcionesArma){
        Object.values(valorUnidad.opcionesArma).forEach(
          (value,index) => opcionesArma.push(
            {
                coste:value.coste,
                cupos:value.cupos,
                cuposOcupados:0,
                activo:true,
                icono:value.icono,
                nombre:value.nombre,
                soldadosOcupados:value.soldadosOcupados
            }
          )
        );
      }
      const auxVal={
          nombre: valorUnidad.nombre,
          experiencia: valorUnidad.experiencia,
          icono:valorUnidad.icono,
          capEscuadra: valorUnidad.capEscuadra,
          minEscuadra: valorUnidad.minEscuadra,
          cuposOcupados:valorUnidad.minEscuadra,
          soldadosConArma:0,
          armaBase:valorUnidad.armamentoBase,
          numeroFusiles:valorUnidad.minEscuadra,
          costeBase:valorUnidad.costeBase,
          costePorFusil:0,
          costeEscuadra:valorUnidad.minEscuadra*valorUnidad.costeBase,
          habilitaAñadeFusilero:true,
          habilitaQuitaFusilero:false,
          opcionesReglasUnidad:opcionesReglas,
          opcionesArmasUnidad:opcionesArma,
          cuposArmasOcupados:0,
          opcionesSargentoUnidad:opcionesSargento,
          opcionSargentoEscogida:0
        }
        //TODO Ver como quitar activo de la base de datos y ponerlo aquí
        this.unidades.push(auxVal);
    }

    eliminaUnidad(indice){
      this.unidades.splice(indice,1);
    }

    //Añade un miembro a la escuadra
    añadeFusilero(indice){
      this.unidades[indice].numeroFusiles++;
      this.unidades[indice].cuposOcupados++;

      this.unidades[indice].habilitaQuitaFusilero=true;
      if(this.unidades[indice].cuposOcupados>=this.unidades[indice].capEscuadra)
        this.unidades[indice].habilitaAñadeFusilero=false;

      this.calculaCuposArmasDisponibles(indice)
      this.calculaCosteEscuadra(indice);
    }
    //Quita un miembro de la escuadra
    quitaFusilero(indice){
      this.unidades[indice].numeroFusiles--;
      this.unidades[indice].cuposOcupados--;

      this.unidades[indice].habilitaAñadeFusilero=true;
      if(this.unidades[indice].cuposOcupados<=this.unidades[indice].minEscuadra)
        this.unidades[indice].habilitaQuitaFusilero=false;

      this.calculaCuposArmasDisponibles(indice)
      this.calculaCosteEscuadra(indice);
    }

    //Método llamado cuando se pulsa sobre una regla especial opcional
    pulsarRegla(indice_d, indice_e){
      this.unidades[indice_d].opcionesReglasUnidad[indice_e].activo=!this.unidades[indice_d].opcionesReglasUnidad[indice_e].activo;
      this.calculaCosteEscuadra(indice_d);
    }

    //Método llamado cuando se pulsa sobre un opción de arma
    addArma(indice_u, indice_a){
      this.unidades[indice_u].cuposArmasOcupados+=this.unidades[indice_u].opcionesArmasUnidad[indice_a].soldadosOcupados;
      this.unidades[indice_u].opcionesArmasUnidad[indice_a].cuposOcupados++;
      const cupDispo=this.calculaCuposArmasDisponibles(indice_u);
      this.calculaCosteEscuadra(indice_u);
    }

    //Método llamado cuando se pulsa sobre un opción de arma no escogida
    quitaArma(indice_u, indice_a){
      this.unidades[indice_u].cuposArmasOcupados-=this.unidades[indice_u].opcionesArmasUnidad[indice_a].soldadosOcupados;
      this.unidades[indice_u].opcionesArmasUnidad[indice_a].cuposOcupados--;
      const cupDispo=this.calculaCuposArmasDisponibles(indice_u);
      this.calculaCosteEscuadra(indice_u);
    }
    //Cambia la opción del sargento. por si acaso, parseo a int
    cambiaArmaSargento(indice_u,indice_a){
      this.unidades[indice_u].opcionSargentoEscogida=parseInt(indice_a);
      this.calculaCosteEscuadra(indice_u);
    }
    //Método auxiliar, usado para bloquear el borrado de soldados o impedir que se cojan nuevas opciones de arma
    calculaCuposArmasDisponibles(indice_u){
      const dif= this.unidades[indice_u].numeroFusiles-this.unidades[indice_u].cuposArmasOcupados-1;
      this.unidades[indice_u].opcionesArmasUnidad.forEach(
            (value,index)=>{
              if(dif<value.soldadosOcupados) {this.unidades[indice_u].opcionesArmasUnidad[index].activo=false;}
              else{this.unidades[indice_u].opcionesArmasUnidad[index].activo=true;}
            }
      )
      if(dif===0) this.unidades[indice_u].habilitaQuitaFusilero=false;
    }

  //Método usado para calcular el coste de cada escuadra
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
    //Costes de las opciones de arma
    this.unidades[index].opcionesArmasUnidad.forEach(
          (value,index)=>{
            coste+=value.cuposOcupados*value.coste;
          }
    )

    //Añadimos el coste del sargento
    const opS=this.unidades[index].opcionSargentoEscogida;
    if(opS) coste+= this.unidades[index].opcionesSargentoUnidad[opS].coste;
    //Se cambia la suma de todos los costes en la escuadra
    this.unidades[index].costeEscuadra=coste;
  }
}


var VarInfantryUnitData=new InfantryUnitData();
export default VarInfantryUnitData;

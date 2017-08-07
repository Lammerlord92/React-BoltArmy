//TODO//Vehículos de la lista actual
import {extendObservable} from 'mobx';
//TODO importar datos directamente de "../controllers/firebaseController" en el constructor;

class VehicleUnitData{
  constructor(){
//    self=this;
    extendObservable(this,{
        costeTotal:0,
        unidades: [],
        armas: []
      });
    }

    añadeVehiculo(valorUnidad){
      var opcionesReglas=[];
      var opcionesVeterania=[];

      if(valorUnidad.veterania) opcionesVeterania=Object.values(valorUnidad.veterania);
      const auxVal={
        coste:opcionesVeterania[0].coste,
        nombre: valorUnidad.nombre,
        icono:valorUnidad.icono,
        blindaje:valorUnidad.blindaje,
        arma:"Cañon antitanque pesado",
        facción:valorUnidad.facción,
        tipo:valorUnidad.tipo,
        veteraniaEscogida:0,
        capacidadEnLista:valorUnidad.capEnLista,
        opcionesVeterania:opcionesVeterania
        }
        //TODO comprobar si la opción del observador está definida al pintar
        this.unidades.push(auxVal);
        this.calculaCosteTotal();
    }

    eliminaUnidad(indice){
      this.unidades.splice(indice,1);
      this.calculaCosteTotal();
    }

    cambiaExperiencia(indice_u,indice_v){
      this.unidades[indice_u].veteraniaEscogida=parseInt(indice_v);
      this.calculaCoste(indice_u);
    }
    //Método llamado cuando se pulsa sobre una regla especial opcional
    pulsarRegla(indice_d, indice_e){
      this.unidades[indice_d].opcionesReglasUnidad[indice_e].activo=!this.unidades[indice_d].opcionesReglasUnidad[indice_e].activo;
      this.calculaCoste(indice_d);
    }
    //Método usado para calcular el coste de cada escuadra
    calculaCoste(index){
      var coste=0;
      const opcEsc=this.unidades[index].veteraniaEscogida;
      //Añadimos el coste de la escuadra según su veteranía
      coste+=this.unidades[index].opcionesVeterania[opcEsc].coste;
      console.log(coste);
      this.unidades[index].coste=coste;
      this.calculaCosteTotal();
    }
    //Calcula los puntos totales de armas de apoyo
    calculaCosteTotal(){
      this.costeTotal=0;
      this.unidades.forEach(
        (value,index)=>{this.costeTotal+=value.coste;}
      )
    }
}

var VarVehicleUnitData=new VehicleUnitData();
export default VarVehicleUnitData;

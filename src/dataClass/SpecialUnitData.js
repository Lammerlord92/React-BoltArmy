//TODO//Elementos especiales de infantería del pelotón (armas de apoyo, cañones, etc...)
import {extendObservable} from 'mobx';
//TODO importar datos directamente de "../controllers/firebaseController" en el constructor;

class SpecialUnitData{
  constructor(){
//    self=this;
    extendObservable(this,{
        unidades: [],
        armas: []
      });
    }

    añadeUnidadEspecial(valorUnidad){
      var opcionesReglas=[];
      var opcionesVeterania=[];
      console.log(valorUnidad);
      if(valorUnidad.opcionesReglas) opcionesReglas=Object.values(valorUnidad.opcionesReglas);
      if(valorUnidad.experiencia) opcionesVeterania=Object.values(valorUnidad.experiencia);
      const auxVal={
        coste:opcionesVeterania[0].costeBase,
        nombre: valorUnidad.nombre,
        icono:valorUnidad.icono,
        tamañoEscuadra:valorUnidad.tamañoEscuadra,
        arma:valorUnidad.arma,
        facción:valorUnidad.facción,
        tipo:valorUnidad.tipo,
        veteraniaEscogida:0,
        capacidadEnLista:valorUnidad.capacidadEnLista,
        opcionObservador:valorUnidad.opcionObservador,
        opcionesReglasUn:opcionesReglas,
        opcionesVeteraniaUn:opcionesVeterania
        }
        //TODO comprobar si la opción del observador está definida al pintar
        this.unidades.push(auxVal);
    }

}

var VarSpecialUnitData=new SpecialUnitData();
export default VarSpecialUnitData;

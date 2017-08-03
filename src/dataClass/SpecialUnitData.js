//TODO//Elementos especiales de infantería del pelotón (armas de apoyo, cañones, etc...)
import {extendObservable} from 'mobx';
//TODO importar datos directamente de "../controllers/firebaseController" en el constructor;

class SpecialUnitData{
  constructor(){
//    self=this;
    extendObservable(this,{
        costeTotal:0,
        unidades: [],
        armas: []
      });
    }

    añadeUnidadEspecial(valorUnidad){
      var opcionesReglas=[];
      var opcionesVeterania=[];
      
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
        opcionesReglasUnidad:opcionesReglas,
        opcionesVeteraniaUn:opcionesVeterania
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
      this.calculaCosteEscuadra(indice_u);
    }
    //Método llamado cuando se pulsa sobre una regla especial opcional
    pulsarRegla(indice_d, indice_e){
      this.unidades[indice_d].opcionesReglasUnidad[indice_e].activo=!this.unidades[indice_d].opcionesReglasUnidad[indice_e].activo;
      this.calculaCosteEscuadra(indice_d);
    }
    //Método usado para calcular el coste de cada escuadra
    calculaCosteEscuadra(index){
      var coste=0;
      const opcEsc=this.unidades[index].veteraniaEscogida;
      //Añadimos el coste de la escuadra según su veteranía
      coste+=this.unidades[index].opcionesVeteraniaUn[opcEsc].costeBase;

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

var VarSpecialUnitData=new SpecialUnitData();
export default VarSpecialUnitData;

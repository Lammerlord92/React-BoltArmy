//TODO//Elementos HQ  de la lista actual
import {extendObservable} from 'mobx';
//TODO importar datos directamente de "../controllers/firebaseController" en el constructor;

class HQUnitData{
  constructor(){
//    self=this;
    extendObservable(this,{
        costeTotal:0,
        unidades: [],
        armas: []
      });
    }

    añadeUnidad(valorUnidad){
      var opcionesReglas=[];
      var opcionesRango=[];
      var opcionesArmas=[];
      if(valorUnidad.opcionesReglas) opcionesReglas=Object.values(valorUnidad.opcionesReglas);
      if(valorUnidad.opcionesRango){
        Object.values(valorUnidad.opcionesRango).forEach(
          (value,index)=>{
              var opcVet=Object.values(value.opcionesVeterania);
              opcionesRango.push(
              {
                  icono:value.icono,
                  nombre:value.nombre,
                  opcionesVeterania:opcVet
              })
            }
        );
      }
      if(valorUnidad.opcionesArmas){
        Object.values(valorUnidad.opcionesArmas).forEach(
          (value,index) => opcionesArmas.push(
            {
                icono:value.icono,
                nombre:value.nombre
            }
          )
        );
      }
      const auxVal={
        coste:opcionesRango[0].opcionesVeterania[0].coste,
        nombre: valorUnidad.nombre,
        icono:valorUnidad.icono,
        iconosAyudantes:valorUnidad.iconosAyudantes,
        maxAyudantes:valorUnidad.maxAyudantes,
        tamañoEscuadra:valorUnidad.tamañoEscuadra,
        opcionesArmas:opcionesArmas,
        facción:valorUnidad.facción,
        tipo:valorUnidad.tipo,
        veteraniaEscogida:0,
        rangoEscogido:0,
        capacidadEnLista:valorUnidad.capacidadEnLista,
        opcionesReglasUnidad:opcionesReglas,
        opcionesRango:opcionesRango,
        numAyudantes:0,
        tamEscuadra:1
        }
        //TODO comprobar si la opción del observador está definida al pintar
        this.unidades.push(auxVal);
        this.calculaCosteTotal();
    }

    eliminaUnidad(indice){
      this.unidades.splice(indice,1);
      this.calculaCosteTotal();
    }

    addAyudante(index){
      this.unidades[index].numAyudantes+=1;
      this.unidades[index].tamEscuadra+=1;
      this.calculaCosteEscuadra(index);
    }

    quitaAyudante(index){
      this.unidades[index].numAyudantes-=1;
      this.unidades[index].tamEscuadra-=1;
      this.calculaCosteEscuadra(index);
    }

    cambiaExperiencia(indice_u,indice_v){
      this.unidades[indice_u].veteraniaEscogida=parseInt(indice_v);
      this.calculaCosteEscuadra(indice_u);
    }
    cambiaRango(indice_u,indice_r){
      this.unidades[indice_u].rangoEscogido=parseInt(indice_r);
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
      const rangoEscogido=this.unidades[index].rangoEscogido;
      const vetEscogida=this.unidades[index].veteraniaEscogida;
      const opcEsc=this.unidades[index].opcionesRango[rangoEscogido].opcionesVeterania[vetEscogida];
      //Añadimos el coste de la escuadra según su veteranía
      coste+=parseInt(opcEsc.coste)+parseInt(this.unidades[index].numAyudantes)*parseInt(opcEsc.costeAyudante);

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

var VarHQUnitData=new HQUnitData();
export default VarHQUnitData;

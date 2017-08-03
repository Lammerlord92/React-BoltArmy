//TODO//Elementos HQ  de la lista actual
import {extendObservable} from 'mobx';
//TODO importar datos directamente de "../controllers/firebaseController" en el constructor;

class HQData{
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
      var opcionesRango=[];
      var opcionesArmas=[];
      var opcionesAyudantes=[];
      if(valorUnidad.opcionesReglas) opcionesReglas=Object.values(valorUnidad.opcionesReglas);
      if(valorUnidad.opcionesRango){
        Object.values(valorUnidad.opcionesRango).forEach(
          (value,index) => opcionesRango.push(
            {
                costeBase:value.coste,
                icono:value.icono,
                nombre:value.nombre
            }
          )
        );
      }
      if(valorUnidad.opcionesArma){
        Object.values(valorUnidad.opcionesArma).forEach(
          (value,index) => opcionesArma.push(
            {
                icono:value.icono,
                nombre:value.nombre
            }
          )
        );
      }
      //TODO añadir el coste según la veteranía
      if(valorUnidad.opcionesAyudantes){
        Object.values(valorUnidad.opcionesAyudantes).forEach(
          (value,index) => opcionesAyudantes.push(
            {
                activo:false,
                icono:value.icono,
                nombre:value.nombre
            }
          )
        );
      }

      const auxVal={
        coste:opcionesRango[0].opcionesVeterania[0].costeBase,
        nombre: valorUnidad.nombre,
        icono:valorUnidad.icono,
        tamañoEscuadra:valorUnidad.tamañoEscuadra,
        opcionesArmas:valorUnidad.opcionesArma,
        facción:valorUnidad.facción,
        tipo:valorUnidad.tipo,
        opcionesAyudantes: valorUnidad.opcionesAyudantes,
        veteraniaEscogida:0,
        armaEscogida:0,
        rangoEscogido:0,
        capacidadEnLista:valorUnidad.capacidadEnLista,
        opcionesReglasUnidad:opcionesReglas,
        opcionesRango:opcionesRango,
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

var VarHQData=new HQData();
export default VarHQData;

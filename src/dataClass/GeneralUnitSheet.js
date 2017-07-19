//datos para añadir a la lista (menú lateral)
import {extendObservable} from 'mobx';
import datos from "../controllers/firebaseController";

class GeneralUnitSheet{
  constructor(){
    self=this;
    extendObservable(this,{
      hQDisponibles:[],
      unidadesDisponibles: [],
      unidadesEspecialesDisponibles: [],
      vehiculosDisponibles: []
    });
    datos.unidadesTabla.once('value').then(
      function(snapshot){
        snapshot.forEach(function(childSnapshot){
          //const key=childSnapshot.key;
          const valor=childSnapshot.val();
          self.unidadesDisponibles.push(valor);
        })
      })
    }
}

var VarGeneralUnitSheet=new GeneralUnitSheet();
export default VarGeneralUnitSheet;

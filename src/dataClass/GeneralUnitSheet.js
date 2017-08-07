//TODO Rellenar todos los datos //datos para añadir a la lista (menú lateral)
import {extendObservable} from 'mobx';
import datos from "../controllers/firebaseController";

class GeneralUnitSheet{
  constructor(){
    self=this;
    extendObservable(this,{
      hQDisponibles:[],
      unidadesDisponibles: [],
      unidadesEspecialesDisponibles: [],
      vehiculosDisponibles: [],
      armasDisponibles:[],
      reglasDisponibles:[]
    });
    datos.hQTabla.once('value').then(
      function(snapshot){
        snapshot.forEach(function(childSnapshot){
          //const key=childSnapshot.key;
          const valor=childSnapshot.val();
          self.hQDisponibles.push(valor);
        })
      })
    datos.unidadesTabla.once('value').then(
      function(snapshot){
        snapshot.forEach(function(childSnapshot){
          //const key=childSnapshot.key;
          const valor=childSnapshot.val();
          self.unidadesDisponibles.push(valor);
        })
      })
      datos.unidadesEspecialesTabla.once('value').then(
        function(snapshot){
          snapshot.forEach(function(childSnapshot){
            //const key=childSnapshot.key;
            const valor=childSnapshot.val();
            self.unidadesEspecialesDisponibles.push(valor);
          })
        })
        datos.vehiculosTabla.once('value').then(
          function(snapshot){
            snapshot.forEach(function(childSnapshot){
              //const key=childSnapshot.key;
              const valor=childSnapshot.val();
              self.vehiculosDisponibles.push(valor);
            })
          })
      datos.armasTabla.once('value').then(
        function(snapshot){
          snapshot.forEach(function(childSnapshot){
            //const key=childSnapshot.key;
            const valor=childSnapshot.val();
            self.armasDisponibles.push(valor);
          })
        })
        datos.reglasTabla.once('value').then(
          function(snapshot){
            snapshot.forEach(function(childSnapshot){
              //const key=childSnapshot.key;
              const valor=childSnapshot.val();
              self.reglasDisponibles.push(valor);
            })
          })
    }
}

var VarGeneralUnitSheet=new GeneralUnitSheet();
export default VarGeneralUnitSheet;

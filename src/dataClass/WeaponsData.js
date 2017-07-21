import {extendObservable} from 'mobx';
import datos from "../controllers/firebaseController";

class WeaponsData{
  constructor(){
    self=this;
    extendObservable(this,{
      armas[]
    });
    datos.armasTabla.once('value').then(
      function(snapshot){
        snapshot.forEach(function(childSnapshot){
          //const key=childSnapshot.key;
          const valor=childSnapshot.val();
          const auxValor={

          }
          self.armasDB.push(auxValor);
        })
      })
    }

}

var VarWeaponsData=new WeaponsData();
export default VarWeaponsData;

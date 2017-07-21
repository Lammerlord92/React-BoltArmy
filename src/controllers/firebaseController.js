import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBjHkdgB3cBVxT0JsdxlWQ9GtseqxDJxUo",
  authDomain: "armybadatabase.firebaseapp.com",
  databaseURL: "https://armybadatabase.firebaseio.com",
  projectId: "armybadatabase",
  storageBucket: "armybadatabase.appspot.com",
  messagingSenderId: "585169357496"
};
firebase.initializeApp(config);

const database=firebase.database();

const unidadesTabla=database.ref('unidades/');
const armasTabla=database.ref('armas/');
const reglasTabla=database.ref('reglasEspeciales/');

const datos={unidadesTabla,armasTabla,reglasTabla};

export default datos;

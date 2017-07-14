import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
//https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-bootstrap
//mport 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <App counter={new Counter()} />,
  document.getElementById('root')
);

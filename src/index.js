import React from 'react';
import ReactDOM from 'react-dom';

import './global.css'
import 'bootstrap/dist/css/bootstrap.css';
// import Client from './components/Client'
// import ClientNew from './pages/ClientNew';
import Clients from './pages/Clients';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Client firstname="Diego" lastname="Saldivar" /> */}
    <Clients />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

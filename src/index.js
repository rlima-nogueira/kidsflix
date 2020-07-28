import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './Pages/Home';

import CadastroVideo from './Pages/Cadastro/Video';

import './index.css';


const paginaDeErro404 = () => (
  <div>
    Error 404! Page Not Found.
  </div>
);


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      
      <Route path="/" exact component={ Home } />
      <Route path="/cadastro/video" component= {CadastroVideo } />



      <Route component= { paginaDeErro404 } />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


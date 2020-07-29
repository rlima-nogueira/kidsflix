import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';

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
      <Route path="/cadastro/categoria" component= {CadastroCategoria} />


      <Route component= { paginaDeErro404 } />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


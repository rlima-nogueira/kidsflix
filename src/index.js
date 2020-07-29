import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';

import Error from './assets/img/error.png';



import './index.css';


const paginaDeErro404 = () => (
  <div className="Erro">
    
    <img width="40%" src={Error} alt="Octocat Erro"/>
    <h3>Ixii... Não encontramos a página!</h3>
    <Link to="/">
      Voltar para Home
    </Link>
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


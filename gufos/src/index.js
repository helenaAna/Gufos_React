//arquivo de configuração de rotas

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import{Route,BrowserRouter as Router, Switch} from 'react-router-dom';

import Categoria from './pages/Categoria'; //importando a pagina categoria

import NotFound from './pages/NotFound';//importando a pagina NotFound
import Evento from './pages/Evento';
import Login from './pages/Login';
import Usuario from './pages/Usuario';

const Rotas = (
    <Router>
        <div>
        <Switch>
            <Route exact path="/" component={App}/> {/*caminho da Home */}
            <Route path="/login" component={Login}/>  
            <Route path="/categoria" component={Categoria}/>
            <Route path="/evento" component={Evento}/>
            <Route path="/usuario" component={Usuario}/>
            <Route component={NotFound}/>
        </Switch>
        </div>
    </Router>
);
// trocar a renderização
ReactDOM.render(Rotas, document.getElementById('root'));
serviceWorker.unregister();

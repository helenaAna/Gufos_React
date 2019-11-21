//arquivo de configuração de rotas

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import{Route,BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';

import Categoria from './pages/Categoria'; //importando a pagina categoria

import NotFound from './pages/NotFound';//importando a pagina NotFound
import Evento from './pages/Evento';
import Login from './pages/Login';
import Usuario from './pages/Usuario';

import{usuarioAutenticado, parseJwt} from './services/auth'

const PermissaoAdm = ({component : Component}) => (
    <Route
    render = {props =>
    usuarioAutenticado() && parseJwt().Role === 'Administrador' ? (
        <Component {...props}/>
    ) : (
        <Redirect to = {{pathname: 'login'}}/>
    )}/>
)

const PermissaoAluno = ({component : Component}) => (
    <Route
    render = {props =>
    usuarioAutenticado() && parseJwt().Role === 'Aluno' ? (
        <Component {...props}/>
    ) : (
        <Redirect to = {{pathname: 'login'}}/>
    )}/>
)

const Rotas = (
    <Router>
        <div>
        <Switch>
            <Route exact path="/" component={App}/> {/*caminho da Home */}
            <Route path="/login" component={Login}/>  
            <PermissaoAdm path="/categoria" component={Categoria}/>
            <PermissaoAluno path="/evento" component={Evento}/>
            <PermissaoAdm path="/usuario" component={Usuario}/>
            <Route component={NotFound}/>
        </Switch>
        </div>
    </Router>
);
// trocar a renderização
ReactDOM.render(Rotas, document.getElementById('root'));
serviceWorker.unregister();

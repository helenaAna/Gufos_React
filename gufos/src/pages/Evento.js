import React, {Component} from 'react'; // Importando o objeto React para usar classNameNameName
import "../App.css";
import Rodape from '../componentes/Rodape'; //Importrand o componente rodapé
import Cabecalho from '../componentes/Cabecalho';

import '../assets/css/flexbox.css';
import '../assets/css/reset.css';
import '../assets/css/style.css';

class Evento extends Component
{
    render(){
        return(
    <div>
    <Cabecalho/>
    <main className="conteudoPrincipal">
      <section className="conteudoPrincipal-cadastro">
        <h1 className="conteudoPrincipal-cadastro-titulo">Eventos</h1>
        <div className="container" id="conteudoPrincipal-lista">
          <table id="tabela-lista">
            <thead>
              <tr>
                <th>#</th>
                <th>Evento</th>
                <th>Data</th>
                <th>Acesso Livre</th>
                <th>Tipo do Evento</th>
              </tr>
            </thead>

            <tbody id="tabela-lista-corpo"></tbody>
          </table>
        </div>

        <div className="container" id="conteudoPrincipal-cadastro">
          <h2 className="conteudoPrincipal-cadastro-titulo">Cadastrar Evento</h2>
          <div className="container">
            <input
              type="text"
              id="evento__titulo"
              placeholder="título do evento"
            />
            <input type="text" id="evento__data" placeholder="dd/MM/yyyy" />
            <select id="option__acessolivre">
              <option value="1">Livre</option>
              <option value="0">Restrito</option>
            </select>
            <select id="option__tipoevento">
              <option value="0" disabled>Tipo do Evento</option>
            </select>
            <textarea
              rows="3"
              cols="50"
              placeholder="descrição do evento"
              id="evento__descricao"
            ></textarea>
          </div>
          <button
            className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
            onclick="cadastrarEvento()"
          >
            Cadastrar
          </button>
        </div>
      </section>
    </main>
    <Rodape/> 
    </div>
        );
     }
}
export default Evento; // por padrão devolve a página como objeto para o navegador
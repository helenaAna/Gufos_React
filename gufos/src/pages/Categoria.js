import React, {Component} from 'react'; // Importando o objeto React para usar classNameNameName
import "../App.css";
import Rodape from '../componentes/Rodape'; //Importrand o componente rodapé
import Cabecalho from '../componentes/Cabecalho';

import '../assets/css/flexbox.css';
import '../assets/css/reset.css';
import '../assets/css/style.css';

class Categogias extends Component
{
    render(){
        return(
    <div>
    <Cabecalho/>
      <main className="conteudoPrincipal">
        <section className="conteudoPrincipal-cadastro">
          <h1 className="conteudoPrincipal-cadastro-titulo">Categorias</h1>
          <div className="container" id="conteudoPrincipal-lista">
            <table id="tabela-lista">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Título</th>
                </tr>
              </thead>

              <tbody id="tabela-lista-corpo"></tbody>
            </table>
          </div>

          <div className="container" id="conteudoPrincipal-cadastro">
            <h2 className="conteudoPrincipal-cadastro-titulo">
              Cadastrar Tipo de Evento
            </h2>
            <form>
              <div className="container">
              <input type="text" id="codigo" placeholder="Código"/> 
                <input type="text" id="nome-tipo-evento" placeholder="tipo do evento"/>
                <button className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro">
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Rodape/> 
    </div>
        );
     }
}
export default Categogias; // por padrão devolve a página como objeto para o navegador

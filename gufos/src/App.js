import React from 'react'; // Importando o objeto React para usar function
// import "./App.css"; //Impornando o CSS
import Rodape from './componentes/Rodape'; //Importando o componente rodapé 
import Cabecalho from './componentes/Cabecalho';
import './assets/css/cabecalho.css';

import './assets/css/flexbox.css';
import './assets/css/reset.css';
import './assets/css/style.css';

function App() { //retorna o que tem nala para o navegador
  return (
    <div> {/*div principal comentario*/}
    <div>
    <Cabecalho/>
        <section className="conteudoImagem">
        <div>
          <h1>Gufos</h1>
          <h2>Área de eventos da Escola SENAI de Informática.</h2>
        </div>
      </section>

      <main className="conteudoPrincipal">
        <section id="conteudoPrincipal-eventos">
          <h1 id="conteudoPrincipal-eventos-titulo">Próximos Eventos</h1>
          <div className="container">
            <nav>
              <ul className="conteudoPrincipal-dados">
                <li className="conteudoPrincipal-dados-link eventos">
                  <h2>Título do Evento</h2>
                  <p>
                    Breve descrição sobre o evento. Lorem ipsum lorem ipsum
                    lorem ipsum.
                  </p>
                  <button>conectar</button>
                </li>

                <li className="conteudoPrincipal-dados-link eventos">
                  <h2>Título do Evento</h2>
                  <p>
                    Breve descrição sobre o evento. Lorem ipsum lorem ipsum
                    lorem ipsum.
                  </p>
                  <button>conectar</button>
                </li>

                <li className="conteudoPrincipal-dados-link eventos">
                  <h2>Título do Evento</h2>
                  <p>
                    Breve descrição sobre o evento. Lorem ipsum lorem ipsum
                    lorem ipsum.
                  </p>
                  <button>conectar</button>
                </li>

                <li className="conteudoPrincipal-dados-link eventos">
                  <h2>Título do Evento</h2>
                  <p>
                    Breve descrição sobre o evento. Lorem ipsum lorem ipsum
                    lorem ipsum.
                  </p>
                  <button>conectar</button>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        <section id="conteudoPrincipal-visao">
          <h1 id="conteudoPrincipal-visao-titulo">Por Quê Participar?</h1>
          <div className="container">
            <p className="visao-texto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Nullam auctor suscipit eros sed blandit. <br />
              Fusce euismod neque sed dapibus sollicitudin. <br />Duis vel lacus
              vestibulum, molestie dui eu, bibendum nunc.
            </p>
          </div>
        </section>

        <section id="conteudoPrincipal-contato">
          <h1 id="conteudoPrincipal-contato-titulo">Contato</h1>
          <div className="container conteudo-contato-titulo">
            <div className="contato-mapa conteudo-contato-mapa"></div>
            <div className="contato-endereco conteudo-contato-endereco">
              Alameda Barão de Limeira, 539 <br />
              São Paulo - SP
            </div>
          </div>
        </section>
      </main>
      <Rodape/> {/*Usando o componente rodapé */}
      </div>
    </div> 
  );
}

export default App;

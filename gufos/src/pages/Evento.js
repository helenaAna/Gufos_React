import React, {Component} from 'react'; // Importando o objeto React para usar classNameNameName
import "../App.css";
import Rodape from '../componentes/Rodape'; //Importrand o componente rodapé
import Cabecalho from '../componentes/Cabecalho';

import '../assets/css/flexbox.css';
import '../assets/css/reset.css';
import '../assets/css/style.css';

class Evento extends Component
{
    constructor(props)
  {
    super(props);
    this.state = {
      listaEvento :[],
      titulo :'',
      dataEvento: '',
      acessoLivre: '',
      categoria:''
    }
    this.atualizaEstadoData = this.atualizaEstadoData.bind(this);
    this.atualizaEstadoAcesso = this.atualizaEstadoAcesso.bind(this);
    this.atualizaEstadoTitulo = this.atualizaEstadoTitulo.bind(this);
    this.buscarEvento = this.buscarEvento.bind(this);
    this.cadastraEvento = this.cadastraEvento.bind(this);
     
  }
  buscarEvento()
{
  fetch('http://localhost:5000/api/eventos')
  .then(resposta => resposta.json())
  .then(data => this.setState({listaEvento : data}))
  .catch((erro) => console.log(erro))
}
atualizaEstadoTitulo(event){
  this.setState({titulo:event.target.value})
}
atualizaEstadoData(event){
  this.setState({dataEvento:event.target.value})
}
atualizaEstadoAcesso(event){
  this.setState({acessoLivre:event.target.value})
}
cadastraEvento(event)
{
  event.preventDefault(); //Evito comportamento padões da pg
  
  //local para onde serão os dados
  fetch('http://localhost:5000/api/eventos', 
  {
    method: 'POST', // declara o metodo que será utilizado 
    body: JSON.stringify({
      titulo : this.state.titulo,
      dataEvento : this.state.dataEvento,
      acessoLivre : this.state.acessoLivre
    }),
    headers:{
      "Content-type" : "application/json"
    }
  })
  .then(resposta => {
    if (resposta.status === 200){
      console.log('Evento Cadatrado!');
    }
  })
  .catch(erro => console.log(erro))
  .then(this.buscarEvento)// Atualiza na tabela a categoria cadastrada
}

componentDidMount()
{
  this.buscarEvento();
}

render(){
  return(
    <div>
    <Cabecalho/>
    <div classNameName="App">
    <main class="conteudoPrincipal">
      <section class="conteudoPrincipal-cadastro">
        <h1 class="conteudoPrincipal-cadastro-titulo">Eventos</h1>
        <div class="container" id="conteudoPrincipal-lista">
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

            <tbody id="tabela-lista-corpo">
              {
                 this.state.listaEvento.map(function(evento){
                  return(
                    <tr key={evento.eventoId}>
                      <td>{evento.eventoId}</td>
                      <td>{evento.titulo}</td>
                      <td>{evento.dataEvento}</td>
                      <td>{evento.acessoLivre ? 'Liberado' : "Negado"}</td>
                      {/* <td>{evento.categoria.titulo}</td> */}
                      
                    </tr>
                  )
                 })
              }
            </tbody>
          </table>
        </div>

      <form onSubmit={this.cadastraEvento}>
        <div class="container" id="conteudoPrincipal-cadastro">
          <h2 class="conteudoPrincipal-cadastro-titulo">Cadastrar Evento</h2>
          <div class="container">
            <input 
              value={this.state.titulo} 
              onChange = {this.atualizaEstadoTitulo}
              type="text"
              id="evento__titulo"
              placeholder="título do evento"
            />
            <input 
            type="date" id="evento__data" 
            placeholder="dd/mm/yyyy" 
            value={this.state.EstadoData}
            onChange = {this.atualizaEstadoData}
            />

            <select id="option__acessolivre"
            value={this.state.acessoLivre}
            onChange = {this.atualizaEstadoAcesso}
            >
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
            class="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
            onclick="cadastrarEvento()"
          >
            Cadastrar
            </button>
          </div>
        </form>
      </section>
    </main>
</div>
    <Rodape/> 
    </div>
        );
     }
}
export default Evento; // por padrão devolve a página como objeto para o navegador
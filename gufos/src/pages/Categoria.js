import React, {Component} from 'react'; // Importando o objeto React para usar classNameNameName
import "../App.css";
import Rodape from '../componentes/Rodape'; //Importrand o componente rodapé
import Cabecalho from '../componentes/Cabecalho';

import '../assets/css/flexbox.css';
import '../assets/css/reset.css';
import '../assets/css/style.css';



class Categoria extends Component
{
  constructor(props)
{
  super(props);
  this.state = {
    listaCategoria :[],
    titulo :''
  }
  //chama funções do projeto
  this.atualizaEstadoTitulo = this.atualizaEstadoTitulo.bind(this);
  this.buscarCategoria = this.buscarCategoria.bind(this);
  this.cadastraCategoria = this.cadastraCategoria.bind(this);
}

buscarCategoria()
{
  fetch('http://localhost:5000/api/categorias')
  .then(resposta => resposta.json())
  .then(data => this.setState({listaCategoria : data}))
  .catch((erro) => console.log(erro))
}
// recebe um evento, e recebo o valor do campo titulo
atualizaEstadoTitulo(event)
{
  this.setState({titulo:event.target.value})
}
cadastraCategoria(event)
{
  event.preventDefault(); //Evito comportamento padões da pg
  
  //local para onde serão os dados
  fetch('http://localhost:5000/api/categorias', 
  {
    method: 'POST', // declara o metodo que será utilizado 
    body: JSON.stringify({titulo: this.state.titulo}),
    headers:{
      "Content-type" : "application/json"
    }
  })
  .then(resposta => {
    if (resposta.status === 200){
      console.log('Categoria cadastrada!');
    }
  })
  .catch(erro => console.log(erro))
  .then(this.buscarCategoria)// Atualiza na tabela a categoria cadastrada
}
// arrowfunction
deletarCategoria = (id) => {
  console.log("Excuindo");
  
  fetch("http://localhost:5000/api/categorias/"+id,{
    method : "DELETE",
    headers : {
      "Content-type" : "application/json"
    }
  })
  .then(response => response.json())
  .then(response => {
    console.log(response);
    this.listaAtualizada();
    this.setState( () =>({lista: this.state.lista}))
  })
  .catch(error => console.log(error))
  .then(this.buscarCategoria)
}

componentDidMount()
{
  this.buscarCategoria();
}

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
                  <th>Ação</th>
                </tr>
              </thead>

              <tbody id="tabela-lista-corpo">
                {
                  this.state.listaCategoria.map(function(categoria)
                  {
                    return(
                      <tr key={categoria.categoriaId}>
                        <td>{categoria.categoriaId}</td>
                        <td>{categoria.titulo}</td>
                        <td>
                          <button type="submit" onClick={i => this.deletarCategoria(categoria.categoriaId)}>
                       Excluir
                          </button>
                        </td>
                      </tr>
                    )
                  }.bind(this))
                }

              </tbody>
              
            </table>
          </div>

          <div className="container" id="conteudoPrincipal-cadastro">
            <h2 className="conteudoPrincipal-cadastro-titulo">
              Cadastrar Tipo de Evento
            </h2>
            <form onSubmit={this.cadastraCategoria}>
              <div className="container">             
                <input 
                value={this.state.titulo} //o valor digitado no input vai para a 
                onChange = {this.atualizaEstadoTitulo}// evento do formulario
                type="text" id="nome-tipo-evento" placeholder="tipo do evento"
                />
                <button type="submit" className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro">
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
export default Categoria; // por padrão devolve a página como objeto para o navegador

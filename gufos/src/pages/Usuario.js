import React, {Component} from 'react'; // Importando o objeto React para usar classNameNameNameName
import "../App.css";
import Rodape from '../componentes/Rodape'; //Importrand o componente rodapé
import Cabecalho from '../componentes/Cabecalho';

import '../assets/css/flexbox.css';
import '../assets/css/reset.css';
import '../assets/css/style.css';

class Usuario extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      listaUsuario :[],
      nome:'',
      email:'',
      permissao:'',
      senha:''
      
    }
  
  this.atualizaEstadoSenha = this.atualizaEstadoSenha.bind(this);
  this.atualizaEstadoPermissao = this.atualizaEstadoPermissao.bind(this);
  this.atualizaEstadoEmail = this.atualizaEstadoEmail.bind(this);
  this.atualizaEstadoNome = this.atualizaEstadoNome.bind(this);
  this.buscarUsuario = this.buscarUsuario.bind(this);
  this.cadastraUsuario = this.cadastraUsuario.bind(this);
  }
  buscarUsuario()
{
  fetch('http://localhost:5000/api/usuarios')
  .then(resposta => resposta.json())
  .then(data => this.setState({listaUsuario : data}))
  .catch((erro) => console.log(erro))
}

atualizaEstadoNome(event)
{
  this.setState({nome:event.target.value})
}
atualizaEstadoEmail(event)
{
  this.setState({email:event.target.value})
}
atualizaEstadoPermissao(event)
{
  this.setState({permissao:event.target.value})
}
atualizaEstadoSenha(event)
{
  this.setState({senha:event.target.value})
}
cadastraUsuario(event)
{
  event.preventDefault(); //Evito comportamento padões da pg
  
  //local para onde serão os dados
  fetch('http://localhost:5000/api/usuarios', 
  {
    method: 'POST', // declara o metodo que será utilizado 
    body: JSON.stringify({
      nome: this.state.nome,
      email:this.state.email,
      permissao:this.state.permissao,
      senha: this.state.senha
    }),
    headers:{
      "Content-type" : "application/json"
    }
  })
  .then(resposta => {
    if (resposta.status === 200){
      console.log('Usuário cadastrado!');
    }
  })
  .catch(erro => console.log(erro))
  .then(this.buscarUsuario)// Atualiza na tabela a categoria cadastrada
}

deletarUsuario = (id) => {
  console.log("Excuindo");
  
  fetch("http://localhost:5000/api/usuarios/"+id,{
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
  .then(this.buscarUsuario)
}

componentDidMount()
{
  this.buscarUsuario();
}
    render(){
        return(
    <div>
    <Cabecalho/>
    <main className="conteudoPrincipal">
      <section className="conteudoPrincipal-cadastro">
        <h1 className="conteudoPrincipal-cadastro-titulo">Usuários</h1>
        <div className="container" id="conteudoPrincipal-lista">
          <table id="tabela-lista">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Permissão</th>
                <th>UF</th>
                <th>Ação</th>
              </tr>
            </thead>

            <tbody>
            {
                  this.state.listaUsuario.map(function(usuarios)
                  {
                    return(
                      <tr key={usuarios.usuarioId}>
                        <td>{usuarios.usuarioId}</td>
                        <td>{usuarios.nome}</td>
                        <td>{usuarios.email}</td>
                        <td>{usuarios.tipoUsuario.titulo}</td>
                        <td>SP</td>
                        <td>
                        <button type="submit" onClick={i => this.deletarUsuario(usuarios.usuarioId)}>
                       Excluir
                          </button>
                        </td>
                      </tr>
                    )
                  }.bind(this))
            }
            </tbody>
          </table>

          <div className="paginacao">
            <a href="#">&laquo;</a>
            <a href="#">1</a>
            <a className="active" href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">&raquo;</a>
          </div>
        </div>
        <form onSubmit={this.cadastraUsuario}>
        <div className="container" id="conteudoPrincipal-cadastro">
          <h2 className="conteudoPrincipal-cadastro-titulo">Cadastrar Usuário</h2>
          <div className="container">
            <input 
            value={this.state.nome}
            onChange={this.atualizaEstadoNome}
            type="text" placeholder="nome do usuário" />
            <input 
            value={this.state.email}
            onChange={this.atualizaEstadoEmail}
            type="text" placeholder="e-mail" />
            <select
            value={this.state.permissao}
            onChange={this.atualizaEstadoPermissao}
            >
              <option value="0" disabled>Permissão</option>
              <option value="ADMINISTRADOR">ADMINISTRADOR</option>
              <option value="COMUM">COMUM</option>
            </select>
            {/* <input type="text" placeholder="data de nascimento" />
            <input type="text" placeholder="logradouro" />
            <input type="text" placeholder="cidade" />
            <input type="text" placeholder="estado" /> */}
            <input
            value={this.state.senha}
            onChange={this.atualizaEstadoSenha}
            type = "password"/>
          </div>
          <button className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro">
            Cadastrar
          </button>
        </div>
        </form>
      </section>
    </main>
    <Rodape/> 
    </div>
        );
     }
}
export default Usuario; // por padrão devolve a página como objeto para o navegador
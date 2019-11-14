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
      uf:'',
      acao:''
    }
  }
  buscarUsuario()
{
  fetch('http://localhost:5000/api/usuarios')
  .then(resposta => resposta.json())
  .then(data => this.setState({listaUsuario : data}))
  .catch((erro) => console.log(erro))
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
                        <td>Editar/Excluir</td>
                      </tr>
                    )
                  })
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

        <div className="container" id="conteudoPrincipal-cadastro">
          <h2 className="conteudoPrincipal-cadastro-titulo">Cadastrar Usuário</h2>
          <div className="container">
            <input type="text" placeholder="nome do usuário" />
            <input type="text" placeholder="e-mail" />
            <select>
              <option value="0" disabled>Permissão</option>
              <option value="ADMINISTRADOR">ADMINISTRADOR</option>
              <option value="COMUM">COMUM</option>
            </select>
            <input type="text" placeholder="data de nascimento" />
            <input type="text" placeholder="logradouro" />
            <input type="text" placeholder="cidade" />
            <input type="text" placeholder="estado" />
          </div>
          <button className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro">
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
export default Usuario; // por padrão devolve a página como objeto para o navegador
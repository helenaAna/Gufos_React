import React, {Component} from 'react'; // Importando o objeto React para usar classNameNameNameName
import Axios from 'axios';

import "../App.css";
import '../assets/css/flexbox.css';
import '../assets/css/reset.css';
import '../assets/css/style.css';
import '../assets/css/login.css';

class Login extends Component
{

  constructor(props){
    super(props);
    this.state = {
      email:'',
      senha:'',
      erroMensagem:''
    }
  }
  efetuaLogin(event){
    event.preventDefault();

    Axios.post('http://localhost:5000/api/login',
    {
        email : this.state.email,
        senha : this.state.senha 
    })
    .then(data => {
        if (data.status === 200){
          localStorage.setItem('usuario-gufos', data.data.token)
          console.log('Meu token é: ' + data.data.token)
        }
    })
    .catch(erro =>{
      this.setState({erroMensagem : 'Email ou senha inválidos!'})
    });
  }
  atualizaStateCampo(event){
    this.setState({[event.target.name] : event.target.value})
  }


    render(){
        return(
    <div>
    <section className="container_login flex">
      <div className="img__login"><div className="img__overlay"></div></div>
        <div className="item__login">
        <div className="row">
          <div className="item">
            <img className="icone__login" src={require("../assets/img/icon-login.png")}/>
          </div>
          <div className="item" id="item__title">
            <p className="text__login" id="item__description">
              Bem-vindo! Faça login para acessar sua conta.
            </p>
          </div>
          <form onSubmit ={this.efetuaLogin.bind(this)}>
            <div className="item">
              <input
                value = {this.state.email} 
                onChange={this.atualizaStateCampo.bind(this)}            
                className="input__login"
                placeholder="username"
                type="text"
                name="email"
                id="login__email"
              />
            </div>
            <div className="item">
              <input
                value = {this.state.senha}
                onChange = {this.atualizaStateCampo.bind(this)}
                className="input__login"
                placeholder="password"
                type="password"
                name="senha"
                id="login__password"
              />
            </div>
            <div className="item">
              <button type = "submit" className="btn btn__login" id="btn__login">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </div>
        );
     }
}
export default Login; // por padrão devolve a página como objeto para o navegador
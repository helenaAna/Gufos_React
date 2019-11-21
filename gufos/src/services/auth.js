// define  contante usuarioAutentidado e rececbe o valor o valor do token que está armazenado 
//no localStorage
export const usuarioAutenticado = () => localStorage.getItem('usuario-gufos') !==null;

export const parseJwt = () => {
    //define a variavel base64 que vai receber o payload do token
    var base64 = localStorage.getItem('usuario-gufos').split('.')[1];
    //Converte a base64 para string, atraves do método atob e converter a string en JSON
    return JSON.parse(window.atob(base64));
}
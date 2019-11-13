import React from 'react';
import '../assets/css/rodape.css'

//Criando um componente de Nome Rodapé
function Rodape(){
    return(
        <footer className="rodapePrincipal">
        <section className="rodapePrincipal-patrocinadores">
          <div className="container">
            <p>Escola SENAI de Informática - 2019</p>
          </div>
        </section>
      </footer>
    );
}
export default Rodape;
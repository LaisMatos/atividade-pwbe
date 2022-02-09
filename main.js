'use strict'

//criando acesso ao id do <button>
const botaoMenu= document.getElementById('btnMenu');

//função de funcionamento  do botão menu
function menuHamburguer() {
    
    //criando acesso ao id do <nav>
    const navegacao= document.getElementById('navMenu');

    //adicionando class de ativo para navegação
    navegacao.classList.toggle('active');
}

//adicionando evento ao botão e acionando sua função de funcionamento
botao.addEventListener('click',menuHambuguer);
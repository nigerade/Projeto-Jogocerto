// declarando variáveis
let ul = document.querySelector('header');
let menu = document.querySelector('.header__menu');

// ao clicar no menu hamburguer abre ele
function menuShow() {
    if (ul.classList.contains('open')){
        ul.classList.remove('open');
    }

    else{
        ul.classList.add('open');
    }
}

// declarando variavel
let ul2 = document.querySelector('header ul');

// ao scrollar o menu sai
window.onscroll = () => {
    ul.classList.remove('open');
};
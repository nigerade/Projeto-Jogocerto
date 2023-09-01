// declarando variáveis
let ul = document.querySelector('nav ul');
let menu = document.querySelector('#header__menu');

// ao clicar no menu hamburguer abre ele
function menuShow() {
    if (ul.classList.contains('open')){
        menu.classList.toggle('bx-x');
        ul.classList.remove('open');

    }

    else{
        ul.classList.add('open');
        menu.classList.remove('bx-x');
    }
}



// declarando variavel
let ul2 = document.querySelector('nav ul');

// ao scrollar o menu sai
window.onscroll = () => {
    ul.classList.remove('open');
};
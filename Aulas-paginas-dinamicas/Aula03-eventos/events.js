// PRINCIPAIS EVENTOS DE MOUSE

const botao = document.querySelector('button');

const onMouseClick = () => {
    botao.innerText = 'Clicou!'; // Altera o texto do botão ao clicar nele
}

const onMouseEnter = () => {
    botao.innerText = 'Entrou!'; // Altera o texto do botão ao passar o mouse por cima dele
}

const onMouseLeave = () => {
    botao.innerText = 'Saiu!'; // Altera o texto do botão ao tirar o mouse de cima dele
}

botao.addEventListener('click', onMouseClick);
botao.addEventListener('mouseenter', onMouseEnter);
botao.addEventListener('mouseleave', onMouseLeave);

// PRINCIPAIS EVENTOS DE TECLADO

// const novoTexto = document.createElement('h2');
// novoTexto.innerText = 'Uma tecla foi pressionada!';

document.body.addEventListener('keydown', (evento) => {
    const novoTexto = document.createElement('h2');
    novoTexto.innerText = `A tecla ${evento.key} foi pressionada!`;
    document.body.appendChild(novoTexto); // Adiciona o texto ao corpo da página ao pressionar uma tecla
})
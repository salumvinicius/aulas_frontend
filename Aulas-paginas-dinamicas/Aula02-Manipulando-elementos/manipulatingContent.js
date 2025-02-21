//ALTERANDO O CONTEUDO DE ELEMENTOS
const buttonsContainer = document.querySelector(".container");

// buttonsContainer.innerHTML = '<button>Click me</button>'; // Substitui o conteúdo do container

const firstTitle = document.querySelector("h1");

firstTitle.innerText = "Novo título"; // Altera o texto do elemento

// ALTERANDO ESTILOS DE ELEMENTOS

buttonsContainer.style.backgroundColor = "blue"; // Altera a cor de fundo do container

// ALTERANDO ATRIBUTOS DAS TAGS

const lastTitle = document.getElementById("title4");

title4.setAttribute("id", "customTitle"); // Altera o id do elemento

const thirdTitle = document.querySelector('h2:nth-of-type(3)');// nth-of-type(3) é o terceiro h2 da página, diferente do nth-child(3) que seria o terceiro elemento da página

thirdTitle.setAttribute("id", "orangeTitle"); // Altera o id do elemento

lastTitle.removeAttribute("id"); // Remove o id do elemento

// ADICIONANDO E REMOVENDO ELEMENTOS

const newLastTitle = document.createElement('h3'); // Cria um novo elemento h3

newLastTitle.innerText = 'Novo titulo'; // Adiciona um texto ao elemento

document.body.appendChild(newLastTitle); // Adiciona o novo elemento ao body

const newButton = document.createElement('button'); // Cria um novo elemento button

newButton.innerText = 'Novo botão'; // Adiciona um texto ao elemento

newButton.setAttribute('class', 'styledButton boldText'); // Adiciona uma classe ao elemento

newButton.style.backgroundColor = 'red'; // Adiciona um estilo ao elemento

buttonsContainer.appendChild(newButton); // Adiciona o novo elemento ao container
const selectCustomTitle = document.getElementById("customTitle"); //Pega todos os elementos pelo "ID" fornecido no codigo HTML
console.log("Titulo selecionado", selectCustomTitle);

const selectButton = document.getElementsByTagName("button") //Pega todos os elementos pela "Tag" fornecida no codigo HTML como: button, div, section, a...
console.log("Botões da pagina", selectButton)

const selectClasses = document.getElementsByClassName("styledButton") //Pega todos os elementos pelo Nome da classe fornecido no codigo HTML
console.log("Botoes estilizados", selectClasses);

const boldTexts = document.querySelector(".boldText"); //Pega o primeiro caso que encaixe na condição, no caso mostrado é o primeiro que tiver a clase ".boldText"
console.log("Bold texts", boldTexts);

const allBoldTexts = document.querySelectorAll(".boldText"); //Diferente do caso acima, este metodo pega todos os elementos que usam a clase definida, no caso ".boldText"
console.log("Todos Bold texts", allBoldTexts); 
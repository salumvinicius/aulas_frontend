const form = document.querySelector("form");

const geladinhos = document.querySelector('#geladinhos');

const checkboxes = document.querySelectorAll('input[type="checkbox"]');


form.addEventListener('submit', (evento) => {
    const atLeastOneChecked = Array.from(checkboxes).some(item => item.checked);
    evento.preventDefault();
    if (atLeastOneChecked){
        console.log("Enviando seus dados do formulario")
        document.body.innerHTML = '<h1>Formulario enviado com sucesso</h1>'
    }
        else{
            const feedback = document.createElement('p');
            feedback.innerText = 'Selecione pelo menos um geladinho';
            feedback.style.color = 'red';

            geladinhos.appendChild(feedback);
        }

});

const form = document.querySelector("form");

const geladinhos = document.querySelector('#geladinhos');

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const sendForm = async(bodyObject) => {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(bodyObject),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (!resposta.ok) {
            throw new Error('Erro ao enviar o formulário');
        }
    } catch (error) {
        throw error;
    }
}


form.addEventListener('submit', async (evento) => {
    const atLeastOneChecked = Array.from(checkboxes).some(item => item.checked);
    evento.preventDefault();
    if (atLeastOneChecked){

        const formData = new FormData(form);
        const body = Object.fromEntries(formData.entries());
        body.geladinhos = formData.getAll('geladinhos');
        try{
            await sendForm(body);
            document.body.innerHTML = '<h1>Formulario enviado com sucesso</h1>'
        }catch (error) {
            document.body.innerHTML = `<h1>Erro ao enviar o formulario</h1>`
    }
}   else{
        const feedback = document.createElement('p');
        feedback.innerText = 'Selecione pelo menos um geladinho';
        feedback.style.color = 'red';
        geladinhos.appendChild(feedback);
        }

});

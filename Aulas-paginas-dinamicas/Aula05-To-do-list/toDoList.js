const button = document.querySelector('button');

button.addEventListener('click', () => {
    const tasksList = document.querySelector('.tasksContainer');
    const input = document.querySelector('input');
    const newTask = document.createElement('li');
    const checkbox = document.createElement('input');
    const deleteButton = document.createElement('button');

    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        if(checkbox.checked) {
            newTask.style.textDecoration = 'line-through';
        } else {
            newTask.style.textDecoration = 'none';
        }
    });

    deleteButton.innerText = 'X';
    deleteButton.addEventListener('click', () => {
        tasksList.removeChild(newTask);
    });

    newTask.innerText = input.value;

    if(input.value === '') {
        alert('Digite uma tarefa!');
        return;
    }

    newTask.prepend(checkbox);
    newTask.appendChild(deleteButton);
    tasksList.appendChild(newTask);
    input.value = '';
});
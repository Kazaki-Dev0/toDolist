//definir variaveis constantes para uso no código

const btnadd = document.getElementById('btnadd');
const tarefa = document.getElementById('tarefa');
const taskList = document.getElementById('taskList');
const titulo = document.getElementById('titulo');

let nome = prompt('Qual o seu nome?');
titulo.innerHTML = `Lista de Tarefas do(a) ${nome}`;

tarefa.focus();

if(nome =='') {
    
    titulo.innerHTML = 'Lista de Tarefas';
}
else{
    titulo.innerHTML = `Lista de Tarefas do(a) ${nome}`;
}
btnadd.addEventListener('click', criaTarefa);

tarefa.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') criaTarefa();
});

function criaTarefa() {
    if (tarefa.value === '') {
        alert('Digite uma tarefa!');
        return;
    }
    else{
    const listItem = document.createElement('li');
    listItem.textContent = tarefa.value;
    taskList.appendChild(listItem)
    //criar botão de deletar tarefa
    const removeButton = document.createElement('button');
    removeButton.id = "remove";
    removeButton.textContent = 'X';
    listItem.appendChild(removeButton);

    removeButton.addEventListener("click", function(){
        taskList.removeChild(listItem);
    });

    //criar botão de concluir tarefa
    const concluirButton = document.createElement('button');
    concluirButton.id = "conclui";
    concluirButton.textContent = '✓';

    //listItem.appendChild(concluirButton);

    let buttonsItem = document.createElement('div');
    buttonsItem.classList.toggle('buttonsItem');
    listItem.appendChild(buttonsItem);
    buttonsItem.appendChild(concluirButton);
    buttonsItem.appendChild(removeButton);
    
    concluirButton.addEventListener("click", function(){
        listItem.classList.toggle('completed');
    });

    //limpar o campo de input
    tarefa.value = '';
    tarefa.focus();// manter o foco no campo de input
}}
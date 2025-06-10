//definir variaveis constantes para uso no código

const btnAdd = document.getElementById('add');
const tarefa = document.getElementById('tarefa');
const taskList = document.getElementById('taskList');
const titulo = document.getElementById('titulo');

let nome = prompt('Qual o seu nome?');
titulo.innerHTML = `Lista de Tarefas do(a) ${nome}`;

if(nome =='') {
    
    titulo.innerHTML = 'Lista de Tarefas';
}
else{
    titulo.innerHTML = `Lista de Tarefas do(a) ${nome}`;
}
btnAdd.addEventListener('click', criaTarefa);

function criaTarefa() {
   
}
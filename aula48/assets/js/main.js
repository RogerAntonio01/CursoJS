/* // Seleciona os elementos do DOM
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

// Cria um novo elemento 'li' com texto e botão de apagar
function criaLi() {
  const li = document.createElement('li');
  return li;
}

inputTarefa.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criaBotaoApagar(li) {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  // botaoApagar.classList.add('apagar');
  botaoApagar.setAttribute('class', 'apagar');
  botaoApagar.setAttribute('title', 'Apagar esta tarefa');
  li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
  const el = e.target;

  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for(let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas(); */















// Seleciona os elementos do HTML que vamos usar
const input = document.querySelector('.input-tarefa'); // Campo onde o usuário digita a tarefa
const btn = document.querySelector('.btn-tarefa'); // Botão para adicionar a tarefa
const lista = document.querySelector('.tarefas'); // Lista onde as tarefas serão exibidas

// Função para criar uma nova tarefa
const criaTarefa = texto => {
  // Adiciona um item na lista com o texto da tarefa e um botão de apagar
  lista.innerHTML += `<li>${texto} <button class="apagar">Apagar</button></li>`;
  salvar(); // Salva a lista de tarefas no navegador
};

// Função para salvar as tarefas no navegador
const salvar = () => {
  // Pega todas as tarefas da lista, remove o texto "Apagar" e salva no localStorage
  const tarefas = [...lista.querySelectorAll('li')].map(t => t.innerText.replace('Apagar', '').trim());
  localStorage.setItem('tarefas', JSON.stringify(tarefas)); // Converte a lista para JSON e salva
};

// Função para carregar as tarefas salvas quando a página é aberta
const carregar = () => {
  // Pega as tarefas salvas no localStorage e cria cada uma na lista
  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  tarefas.forEach(criaTarefa); // Para cada tarefa salva, chama a função criaTarefa
};

// Evento para apagar uma tarefa quando o botão "Apagar" é clicado
document.addEventListener('click', e => {
  if (e.target.classList.contains('apagar')) { // Verifica se o clique foi no botão "Apagar"
    e.target.parentElement.remove(); // Remove a tarefa da lista
    salvar(); // Salva a lista atualizada no navegador
  }
});

// Evento para adicionar uma tarefa quando a tecla "Enter" é pressionada no campo de input
input.addEventListener('keypress', e => {
  if (e.key === 'Enter' && input.value) { // Verifica se a tecla pressionada é "Enter" e se o campo não está vazio
    criaTarefa(input.value); // Cria a nova tarefa com o texto digitado
    input.value = ''; // Limpa o campo de input
    input.focus(); // Coloca o cursor de volta no campo de input
  }
});

// Evento para adicionar uma tarefa quando o botão "Adicionar" é clicado
btn.addEventListener('click', () => {
  if (input.value) { // Verifica se o campo de input não está vazio
    criaTarefa(input.value); // Cria a nova tarefa com o texto digitado
    input.value = ''; // Limpa o campo de input
    input.focus(); // Coloca o cursor de volta no campo de input
  }
});

// Chama a função para carregar as tarefas salvas quando a página é aberta
carregar();

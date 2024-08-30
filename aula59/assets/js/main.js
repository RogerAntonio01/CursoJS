function Calculadora() {
    this.display = document.querySelector('.display'); // Seleciona o campo de exibição da calculadora

    this.inicia = () => {
        this.capturaCliques(); // Inicializa os eventos de clique nos botões
        this.capturaEnter(); // Inicializa o evento de pressionar a tecla Enter
    };

    this.capturaEnter = () => {
        document.addEventListener('keypress', e => {
            if (e.keyCode !== 13) return; // Verifica se a tecla pressionada é o Enter
            this.realizaConta(); // Realiza a conta
        });
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const elemento = event.target; // Pega o elemento clicado
            if (elemento.classList.contains('btn-num')) this.addNumDisplay(elemento); // Adiciona o número ao display
            if (elemento.classList.contains('btn-clear')) this.clear(); // Limpa o display
            if (elemento.classList.contains('btn-del')) this.del(); // Apaga um caractere
            if (elemento.classList.contains('btn-eq')) this.realizaConta(); // Realiza a conta
        });
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value); // Avalia a expressão matemática
            if (isNaN(conta) || conta === undefined || conta === null) {
                alert('Conta inválida'); // Verifica se a conta é inválida
                return;
            }
            this.display.value = String(conta); // Exibe o resultado no display
        } catch(e) {
            alert('Conta inválida'); // Alerta se houver um erro na avaliação
        }
    };

    this.addNumDisplay = elemento => {
        this.display.value += elemento.innerText; // Adiciona o valor do botão clicado ao display
        this.display.focus(); // Foca no display
    };

    this.clear = () => this.display.value = ''; // Limpa o display
    this.del = () => this.display.value = this.display.value.slice(0, -1); // Apaga o último caractere do display
}

const calculadora = new Calculadora(); // Cria a calculadora
calculadora.inicia(); // Inicializa a calculadora

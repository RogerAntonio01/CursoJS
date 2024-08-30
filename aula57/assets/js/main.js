function criaCalculadora() {
    return {
        display: document.querySelector('.display'), // Seleciona o campo de exibição da calculadora

        inicia() {
            this.cliqueBotoes(); // Inicializa os eventos de clique nos botões
            this.pressionaBackSpace(); // Inicializa o evento de pressionar a tecla Backspace
            this.pressionaEnter(); // Inicializa o evento de pressionar a tecla Enter
        },

        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
                if (e.keyCode === 8) { // Verifica se a tecla pressionada é o Backspace
                    e.preventDefault(); // Previne o comportamento padrão
                    this.clearDisplay(); // Limpa o display
                }
            });
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) { // Verifica se a tecla pressionada é o Enter
                    this.realizaConta(); // Realiza a conta
                }
            });
        },

        realizaConta() {
            let conta = this.display.value; // Pega o valor do display

            try {
                conta = eval(conta); // Avalia a expressão matemática

                if(!conta) { // Verifica se a conta é inválida
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta); // Exibe o resultado no display
            } catch(e) {
                alert('Conta inválida');
                return;
            }
        },

        clearDisplay() {
            this.display.value = ''; // Limpa o display
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1); // Apaga o último caractere do display
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target; // Pega o elemento clicado

                if(el.classList.contains('btn-num')) { // Verifica se o botão clicado é um número
                    this.btnParaDisplay(el.innerText); // Adiciona o número ao display
                }

                if(el.classList.contains('btn-clear')) { // Verifica se o botão clicado é o de limpar
                    this.clearDisplay(); // Limpa o display
                }

                if(el.classList.contains('btn-del')) { // Verifica se o botão clicado é o de apagar
                    this.apagaUm(); // Apaga um caractere
                }

                if(el.classList.contains('btn-eq')) { // Verifica se o botão clicado é o de igual
                    this.realizaConta(); // Realiza a conta
                }

                this.display.focus(); // Foca no display
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor; // Adiciona o valor ao display
        }

    };
}

const calculadora = criaCalculadora(); // Cria a calculadora
calculadora.inicia(); // Inicializa a calculadora

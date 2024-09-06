// defineProperty -> Getter e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configuravel
        get: function() { // get obtem o valor 
            return estoquePrivado;        
        },
        set: function(valor) { // set seta o valor
            if  (typeof valor !== 'number') {
                throw new TypeError('Mensagem');
            }
            estoquePrivado = valor;
        } 
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 'dkksmskdfk';
console.log(p1.estoque);
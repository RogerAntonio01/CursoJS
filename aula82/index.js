class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + 'ja ligado');
            return;
        }    
    }

    desligar() { 
        if(!this.ligado) {
            console.log(this.nome + 'ja desligado');
            return;
        }   
        this.ligado = false; 
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); 
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('olha, você alterou o metodo ligar.')
    }
}

const s1 = new Smartphone('Sansung', 'Preto', 'Galaxy s10',);
console.log(s1);

const t1 = new Tablet('iPad', true );
console.log(t1.ligado);
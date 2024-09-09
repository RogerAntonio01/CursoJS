class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentoVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    trocaPilha() {
        console.log('Ok, vou trocar.');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentoVolume();
controle1.aumentoVolume();
controle1.aumentoVolume();
console.log(controle1);
controle1.trocaPilha();
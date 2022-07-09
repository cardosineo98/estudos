function Carro(marca,cor,motor) {
   this.marca = marca;
   this.cor = cor;
   this.motor = motor;
}

Carro.prototype.ligar = function() {
   console.log("Vruum, Carro Ligado!")
}

Carro.prototype.desligar = function () {
   console.log("Carro Desligado !!")
}

let mercedes = new Carro('Ford','Azul','1.0');

mercedes.ligar();
mercedes.desligar();
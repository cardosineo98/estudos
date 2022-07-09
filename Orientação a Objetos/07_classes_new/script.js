function Carro(marca,cor,motor) {
   this.marca = marca;
   this.cor = cor;
   this.motor = motor;
   this.ligar = function() {
      console.log("Vruuuum, Carro Ligado!!");
   }
}

let mercedes = new Carro('Ford','Azul','1.0');

mercedes.ligar();
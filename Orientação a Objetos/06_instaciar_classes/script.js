function criarCarro(marca, cor, motor) {
   let carro = Object.create({});
   carro.marca = marca;
   carro.cor = cor;
   carro.motor = motor;
   carro.desligar = function(){
      console.log("Carro desligado");
   }
   return carro;
}

let fiat = criarCarro('fiat','Branco','1.3 Turbo');

console.log(fiat);

fiat.desligar();
class Carro {
   constructor(marca,cor) {
      this.marca = marca;
      this.cor = cor;
   }
   
   ligar() {
      console.log("Vruuum Carro Ligado");
   }
}

Carro.prototype.porta = 4;

let kia = new Carro('kia','Vermelho');

console.log(kia.porta);

kia.ligar();
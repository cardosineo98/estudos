class Carro {
   constructor(marca,cor) {
      this.marca = marca;
      this.cor = cor;
   }
   
   ligar() {
      console.log("Vruuum Carro Ligado!!!");
   }
}

let portas = Symbol();

Carro.prototype[portas] = 4;

let kia = new Carro('kia','Vermelho');

kia.ligar();

//Consultando symbol

console.log(Carro.prototype[portas]);
console.log(kia[portas]);
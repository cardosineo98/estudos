let carro = {
   portas: 4,
   marca: "Audi",
   ligar: function() {
      console.log("Vruuuum, Carro Ligado!!")
   }
}

let mercedes = Object.create(carro);

mercedes.ligar();

mercedes.marca = "Mercedes";

console.log(mercedes.marca);
console.log(carro.marca);

let bmw = Object.create(carro);

bmw.marca = "bmw";

console.log(bmw.marca);
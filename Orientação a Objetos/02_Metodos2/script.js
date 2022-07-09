const carro = {
   marca: "BMW",
   ligar: function(){
    console.log("Carro Ligado");
   },
   desligar: function (){
    console.log("Carro Desligado");
   },
   setMarca: function(marca) {
      this.marca = marca;
   },
   getMarca: function() {
      return "A Marca do Carro é " + this.marca;
   }
}

console.log(carro.marca);

carro.setMarca("Mercedes");

console.log(carro.marca);

console.log(carro.getMarca());
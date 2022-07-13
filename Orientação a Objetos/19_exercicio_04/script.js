//Simulação Carros

class Carro {
   constructor(marca,cor,gasolina) {
   this.marca = marca;
   this.cor = cor;
   this.gasolina = gasolina;
   }

   frente(){
      this.gasolina -= 3;
      console.log("Voce Esta Acelerando o Carro");
      console.log('Combustivel = ' +  this.gasolina + 'L');
      
   }

   freio(){
      this.gasolina -= 2;
      console.log("Voce Freiou o Carro");
      console.log('Combustivel = ' +  this.gasolina + 'L');
      
   }

   esquerda(){
      this.gasolina -= 1;
      console.log("Voce Virou a Esquerda");
      console.log('Combustivel = ' +  this.gasolina + 'L');
      
   }

   direita(){
      this.gasolina -= 1;
      console.log("Voce virou a Direita");
      console.log('Combustivel = ' +  this.gasolina + 'L');
      
   }

}

let palio = new Carro ("Fiat","Branco",53);


palio.direita();

palio.esquerda();

palio.frente();

palio.freio();
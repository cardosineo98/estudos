class Cachorro {
   constructor(raca,cor) {
      this.raca = raca;
      this.cor = cor;
   }

 
latir() {
   console.log("Au Au");
}

get getCor() {
   return this.cor;
}

set setCor(cor) {
   this.cor = cor;
}

}

let basset = new Cachorro('Basset Darschund','Sem cor');

console.log(basset);

basset.setCor = 'Marrom';

console.log(basset.getCor);
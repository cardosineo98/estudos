//Simulação Endereço.

class Endereço {
   constructor(rua, bairro, cidade, estado) {
      this.rua = rua,
      this.bairro = bairro;
      this.cidade = cidade;
      this.estado = estado;
   }

   set attRua(attRua) {
      this.rua = attRua;
   }

   set attBairro(attBairro) {
      this.bairro = attBairro; 
   }
   
   set attCidade(attCidade) {
      this.cidade = attCidade;
   }

   set attEstado(attEstado) {
      this.estado = estado;
   }

}


   let minhaCasa = new Endereço('Dona Maria Augusta Nogueira','Bongi','Recife','Pernambuco');

   minhaCasa.attCidade = 'Paudalho';

   console.log(minhaCasa);

   minhaCasa.attRua = "Rua do Desterro";

   console.log(minhaCasa);






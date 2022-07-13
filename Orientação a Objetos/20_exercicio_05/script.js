//Simulação Conta Bancaria

class ContaBancaria {
   constructor(cc,cp,juros) {
      this.cc = cc;
      this.cp = cp;
      this.juros = juros;
   }

   depositarcc(valor) {
      this.cc += valor;
      console.log("Obrigado Pelo Deposito de: " + valor +", Seu Novo Saldo em sua Conta Corrente é: " + this.cc);
    }

   depositarcp(valor) {
      this.cp += valor;
      console.log("Obrigado Pelo Deposito de: " + valor +", Seu Novo Saldo em sua Conta Poupança é: " + this.cp);
   }
   
   saquecc(valor) {
      if(valor > this.cc){
         console.log("Saldo Insuficiente !!");
      }
      else{
         this.cc -= valor;
         console.log("Você Sacou: " + valor +", Da Sua Conta Corrente");
      }
   }

   saquecp(valor) {
      if(valor > this.cp){
         console.log("Saldo Insuficiente !!");
      }
      else{
         this.cp -= valor;
         console.log("Você Sacou: " + valor +", Da Sua Conta Poupança");
      }
   }
   transferirParaCp(valor){
      if(valor > this.cc) {
         console.log("Saldo Insuficiente");
      }
      else{
         this.cp += valor;
         this.cc -= valor;
         console.log("Transferencia Concluida o seu Novo Saldo da Sua Conta Poupança é: " + this.cp);
      }
      
   }

   transferirParaCc(valor){
      if(valor > this.cp) {
         console.log("Saldo Insuficiente");
      }
      else{
         this.cp -= valor;
         this.cc += valor;
         console.log("Transferencia Concluida o seu Novo Saldo da Sua Conta Corrente é: " + this.cc);
      }
   }

   jurosDeAniversario() {
      let juros = (this.cp * this.juros) / 100;
      this.cp += juros;
   }


}

class ContaEspecial extends ContaBancaria {
   constructor(cc,cp,juros){
      super(cc,cp,juros * 2)
   }
   
}



let minhaConta = new ContaBancaria (1000,2000,1);

minhaConta.depositarcc(100);

minhaConta.depositarcp(100);

minhaConta.saquecc(10000);

minhaConta.saquecp(10000);

minhaConta.saquecc(50);

minhaConta.saquecp(75);

minhaConta.transferirParaCc(5000);

minhaConta.transferirParaCp(5000);

minhaConta.transferirParaCc(5);

minhaConta.transferirParaCp(5);

minhaConta.jurosDeAniversario();

console.log(minhaConta);

let minhaContaE = new ContaEspecial (10000,50000,1);

console.log(minhaContaE);

minhaContaE.saquecp(5000);

minhaContaE.jurosDeAniversario();

console.log(minhaContaE);
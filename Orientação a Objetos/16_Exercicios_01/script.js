//Primeiro: Simular uma conta bancaria

   let conta = {
      nome: "Lucas",
      saldo: 1000,
      sacar: (valorSaque) => {
         return conta.saldo -= valorSaque;        
      },
      deposito: (valorDeposito) => {
         return conta.saldo += valorDeposito;        
      }
   
   }


  conta.sacar(750);

  console.log(conta.saldo);

  conta.deposito(12);

  console.log(conta.saldo)
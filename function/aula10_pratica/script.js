function imprimirNoConsole(){
  console.log("Hellow World");
}

imprimirNoConsole();


function impIdade(idade) {
  console.log("Voce tem: " + idade + " Anos");
}

impIdade(24);

//Calculo

function calculo(a,b){
  return a + b;
}

console.log(calculo(10,10))

//Numero Aleartorio

function aleartorio(num){
  return Math.floor(Math.random() * 100) + 1;
}

console.log(aleartorio(10));
console.log(aleartorio(100));

// Pode Dirigir

function autoEscola (idade) {
  if(idade >= 18) {
    console.log("Voce pode entrar na autoescola.")
  }
  else{
    console.log("Voce nao pode entrar na auto escola!!")
  }
}

autoEscola(19);
autoEscola(17);

//Tipo de Dado

function tipoDado(dado) {
  if(typeof dado === 'number'){
    console.log("Dado informado e um numero.")   
  }
  else if(typeof dado === 'boolean'){
    console.log("Dado tem um valor Booleano.")
  } else if(typeof dado === 'string'){
    console.log("Seu Dado e uma string.")
  }
}

tipoDado(18);
tipoDado(true);
tipoDado("Lucas");

//Numero Positivo

function NumeroNegativo(num) {
  return Math.abs(num);
}

console.log(NumeroNegativo(-3));
console.log(NumeroNegativo(18));
console.log(NumeroNegativo(-18.4));

//Quantidade caracteres

function contadorCaracteres(texto){
  if(texto.length > 10) {
    console.log("Texto Muito Longo")    
  } else {
    console.log("Texto Dentro do Limite")
  }

}
contadorCaracteres("Texto Lucas Cardoso de Lima");
contadorCaracteres("Lucas");

//Potencia

function potencia(a,b) {
  return Math.pow(a,b);
}

console.log(potencia(10,2));
console.log(potencia(18,6));
console.log(potencia(41,7));

function decre(num) {
  for(let i = num; i >= 0; i--)
    if(i % 2 == 0){
      console.log(i)
    }
     

}

decre(100);
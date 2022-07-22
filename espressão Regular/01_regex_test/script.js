const reg1 = new RegExp('moto');

console.log(reg1.test("Tem moto?"));
console.log(reg1.test("Não Tem"));

const reg2 = /carro/;

let text = 'Tem carro na garagem?';

console.log(reg2.test("Tem carro?"));
console.log(reg2.test("Não Tem"));

console.log(reg2.test(text));

console.log(/carro/.test("Onde tem um carro"));
console.log(/carro/.test("5616561651carro68198674894"));
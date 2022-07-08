const calculadora = {
    soma: function(a,b) {
        return a + b;
    },
    subtrair: function(a,b) {
        return a - b;
    },
    produto: function(a,b) {
        return a * b;
    },
    divisao: function(a,b) {
        return a / b;
    },
}

console.log(calculadora.soma(4,5))
console.log(calculadora.subtrair(10,5));
console.log(calculadora.produto(10,18));
console.log(calculadora.divisao(25,5));
const validaDominio =  /\w+@\w+\.\w+/;

console.log(validarEmail.test("lucas@gmail.com"));
console.log(validarEmail.test("cardoso@gmail"));
console.log(validarEmail.test("gmail.com"));
console.log(validarEmail.test("lucascardoso@gmail.com.br"));
console.log(validarEmail.test("gmail@gmail.gmail.gmail"));
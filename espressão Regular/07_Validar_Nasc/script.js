const validarNascimento =  /[0-31]{2}[/][0-12]{2}[/][1920-2020]{4}/;

console.log(validarNascimento.test('18/06/1998'));
console.log(validarNascimento.test('1/1/1998'));
console.log(validarNascimento.test('18-06-1998'));
console.log(validarNascimento.test('18/06/98'));
console.log(validarNascimento.test('13/08/1966'));
console.log(validarNascimento.test('99/99/9999'));
console.log(validarNascimento.test('18/00/1998'));
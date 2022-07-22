const validaDominio =  /[www?.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com"));
console.log(validaDominio.test("facebook.com"));
console.log(validaDominio.test("www.google"));
console.log(validaDominio.test("google.com"));
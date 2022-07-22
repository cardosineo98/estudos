//1- So aceita letras MAIUSCULAS
const letrasMaiusculas = /[A-Z]/;

console.log("Letras Maiusculas");

console.log(letrasMaiusculas.test('D'));
console.log(letrasMaiusculas.test('d'));

//2- So Aceita ID

const validarId = /\d+ID\b/;

console.log("Validar ID")

console.log(validarId.test('65165165ID'));
console.log(validarId.test('65165165ID'));
console.log(validarId.test('lucas'));
console.log(validarId.test('lucasID'));

//3- Teste Expressão

console.log("Validar Marca");

const validarMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validarMarca.test("Marca: Nike"));
console.log(validarMarca.test("faksm"));
console.log(validarMarca.test("Marca: "));
console.log(validarMarca.test("Asics"));
console.log(validarMarca.test("6788616"));

//4- Validar Endereço IP

const validarIp = /^((1?\d{1,2}|2([0-4]\d|5[0-5]))\.){3}(1?\d{1,2}|2([0-4]\d|5[0-5]))$|^$/;

console.log("Validando IP")

console.log(validarIp.test("456851"));
console.log(validarIp.test("192.168.0.1"));
console.log(validarIp.test("127.0.0.1"));
console.log(validarIp.test("8.8.8.8"));
console.log(validarIp.test("192.168.0.62"));

const validarUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log("Validando Usuario");

console.log(validarUsuario.test("Lucas_456"));
console.log(validarUsuario.test("asdawe2"));
console.log(validarUsuario.test("56asd56as1d"));


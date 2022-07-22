let p = Promise.resolve(new Error("Não Deu Certo"));

console.log("lalala");

p.then(value => console.log(value))
 .catch(reason => console.log("Falhou: " + reason));
const moto = {
   lugares: 2,
}

let motoNova = Object.create(moto);

console.log(motoNova.lugares);
console.log(Object.getPrototypeOf(moto));
console.log(Object.getPrototypeOf(motoNova) == moto);
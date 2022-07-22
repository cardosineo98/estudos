const pontoRegex = /./;

console.log(".");
console.log(pontoRegex.test("qwe"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("789"));
console.log(pontoRegex.test("as15d1"));

const dRegex = /\d/; // [0-9]

console.log("d");
console.log(dRegex.test("qwe"));
console.log(dRegex.test(" "));
console.log(dRegex.test("789"));
console.log(dRegex.test("as15d1"));

const dRegex2 = /\D/; // [^0-9]

console.log("D");
console.log(dRegex2.test("qwe"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("789"));
console.log(dRegex2.test("as15d1"));

const sRegex = /\s/;

console.log("s");
console.log(sRegex.test("qwe"));
console.log(sRegex.test(" "));
console.log(sRegex.test("789"));
console.log(sRegex.test("as15d1"));

const wRegex = /\w/;

console.log("W");
console.log(wRegex.test("qwe"));
console.log(wRegex.test(" "));
console.log(wRegex.test("789"));
console.log(wRegex.test("as15d1"));
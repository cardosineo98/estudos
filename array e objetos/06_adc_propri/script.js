let pessoa = {
    nome:"Cardoso",
    idade: "24",
    profissao: "Operador de Caixa, Por Enquanto."
}

console.log(pessoa.nome);
 
delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.gordo = true;

console.log(pessoa.gordo);
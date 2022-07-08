//Primeiro
let diasSemana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"];

    console.log(diasSemana[0]);
    console.log(diasSemana[2]);
    console.log(diasSemana[3]);

//Segundo

let primeiro = [3,4];
let segundo = [43,32,21,81];

console.log(primeiro.length);
console.log(segundo.length);

//Terceiro

let onibus = {
    rodas: 8,
    LimitePassageiros: 40,
    portas: 2,
}

console.log(onibus.rodas);
console.log(onibus.LimitePassageiros);
console.log(onibus.portas);

//Quarto

onibus.janela = 20;

delete onibus.rodas;

console.log(onibus.rodas);
console.log(onibus.janela);

//Quinto

let nomes = ["Lucas","Cardoso","Lima","Isabel","Berg"];

if(nomes.includes("Lucas")) {
    console.log("O Nome foi Encontrado!");
}

//Sexto

let carros = ["BMW","Audi","Mercedes","Ferrari","Bugatti","Nissan"];
let motos = ["Honda","Yamaha","Suzuki"];

function verificador(i) {
    if(i.length < 5) {
        console.log("Poucos Elementos");
    }
    else{
        console.log("Muitos Elementos!");
    }
}

verificador(carros);
verificador(motos);

//Setimo

let nomes1 = ["Lima","Cardoso","Lucas","Jefferson","Cristina"];

    nomes1.forEach(nome => {
        console.log(nome);
    });

//Oitavo

let casa = {
    "Janela": 3,
    "Garagem": 4,
    "Entrada": 1,
}
console.log(casa.Garagem);
console.log(casa.Janela);
console.log(casa.Entrada);

//Nono

const frase = "Eu Sou Muito Bonito."

const arrFrase = frase.split(" ");

for(i = 0; i < arrFrase.length; i++){
    console.log(arrFrase[i])
}
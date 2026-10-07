// Coment´raio de uma linha
/* Comentário de múltiplas linhas */
// Três formas de declarar uma variável (sem tipo)
// O var e o let se distinguem pelo escopo e declaração

let nome="Duda"
var sobreNome;
const e=2.78

if (nome=="Duda") {
    sobreNome="Schafer";
    let idade=17;
    var pet="dog";
    console.log("nome: " + nome + "sobreNome: " + sobreNome + "Idade: " + idade + "pet: " + pet);
}

// console.log("nome: " + nome + "sobreNome: " + sobreNome + "Idade: " + idade + "pet: " + pet);

// Estruturas de seleção no JS

if (idade == 20) {
    console.log("A")
}
if (idade === 20) {
    console.log("B")
} 
peso = 80
altura = 1.80
imc = peso/(altura*altura)
//classificação do IMC
if (imc<18.5) {
    console.log("Abaixo do peso")
} else if (imc>=18.5 && imc<25) {
    console.log("Peso normal")
} else if (imc>=25 && imc<30) {
    console.log("Acima do peso")
} else if (imc>=30 && imc<35) {
    console.log("Obesidade grau 1")
} else if (imc>=35 && imc<40) {
    console.log("Obesidade grau 2")
} else if (imc>=40) {
    console.log("Obesidade grau 3")
}

// switch case estutura de seleção

a = 2
switch(a) {
    case 1: console.log("A"); break;
    case 2: console.log("B"); break;
    case 3: console.log("C"); break;
    default: console.log("D");
}

// switch case com expresão

switch(a) {
    case a**a1==4: console.log("A"); break;
    case a==2: console.log("B"); break;
    case 3==3: console.log("C"); break;
    default: console.log("D");
}

// Estrutura de repetição while

let i = 0;
while(i<5) {
    console.log(1);
    i++;
}

// for

for (let i=0; i<5; i++) {
    console.log(i);
}

// arrays

let frutas = ["picanha", "costela", "alcatra", "fraldinha"];
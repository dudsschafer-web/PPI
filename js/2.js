//
//
//
//
//
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
    console.log("A");
}
if (idade === 20) {
    console.log("B");
} 
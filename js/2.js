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
}
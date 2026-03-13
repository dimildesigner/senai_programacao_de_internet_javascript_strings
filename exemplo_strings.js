
console.log("\n\n......... Length .........\n");

let texto = "JavaScript";
console.log(texto.length); // Resultado: 10

let palavra = "Olá";
console.log(palavra[0]); 



console.log("\n\n......... Upper Case e Lower Case .........\n");

let saudacao = "Olá, Mundo!";
console.log(saudacao.toUpperCase()); // "OLÁ, MUNDO!"
console.log(saudacao.toLowerCase()); // "olá, mundo!"

saudacao_CA = saudacao.toUpperCase(); // Alteração na variável

console.log("\nO texto todo em CAIXA ALTA ficará assim: " + saudacao_CA + "\n");



console.log("\n\n......... Index Of .........\n");

let frase = "Aprender JavaScript é divertido!"; // Substring

console.log("O primeiro 'n' minúsculi aparece no índice: " + frase.indexOf('n') + "\n");

console.log("O 'é' aparece no índice: " + frase.indexOf('é') + "\n");

console.log("O 'JavaScript' aparece no índice: " + frase.indexOf('JavaScript') + "\n");



console.log("\n\n......... Slice .........\n");

let nome = "Desenvolvedor Web \n";
let parte = nome.slice(0, 12); // "Desenvolvedo"
console.log(parte);



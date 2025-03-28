/***************************************************************************
Programa que rola um dado e descobre o vencedor.
*****************************************************************************/

var prompt = require('prompt-sync')();

function rolarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

console.log("Jogador 1, pressione Enter para rolar o dado...");
prompt(); 
let resultadoJogador1 = rolarDado();
console.log(`Jogador 1 rolou: ${resultadoJogador1}`);

console.log("Jogador 2, pressione Enter para rolar o dado...");
prompt(); 
let resultadoJogador2 = rolarDado();
console.log(`Jogador 2 rolou: ${resultadoJogador2}`);

if (resultadoJogador1 > resultadoJogador2) {
    console.log("Jogador 1 é o vencedor!");
} else if (resultadoJogador1 < resultadoJogador2) {
    console.log("Jogador 2 é o vencedor!");
} else {
    console.log("Empate! Ambos os jogadores rolando o mesmo número.");
}
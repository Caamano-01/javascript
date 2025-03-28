/***************************************************************************
um programa que recebe um número inteiro de 1 a 20 e mostra 
na tela o número por extenso.
*****************************************************************************/

var prompt = require('prompt-sync')();

var numero = prompt("Digite um número entre 1 e 20:");

const numerosPorExtenso = [
    "", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez",
    "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove", "vinte"
];

if (numero >= 1 && numero <= 20) {
    console.log(`O número ${numero} por extenso é: ${numerosPorExtenso[numero]}`);
} else {
    console.log("Número inválido! Digite um número entre 1 e 20.");
}
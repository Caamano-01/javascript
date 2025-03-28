/***************************************************************************
um programa que gera 1000 números inteiros aleatórios.
*****************************************************************************/

var prompt = require('prompt-sync')();

function gerarNumerosAleatorios(qtd) {
    let numeros = [];
    for (let i = 0; i < qtd; i++) {
        let numero = Math.floor(Math.random() * 1001); 
        numeros.push(numero);
    }
    return numeros;
}

// Gerar 1000 números aleatórios e exibir no console
let numerosAleatorios = gerarNumerosAleatorios(1000);
console.log(numerosAleatorios);
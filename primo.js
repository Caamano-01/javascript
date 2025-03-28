/***************************************************************************
um programa que determina se um dado número é primo ou não.
*****************************************************************************/

var prompt = require('prompt-sync')();

var numero = Number(prompt("Digite o número:"));

function verificarPrimo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    
    return true;
}

if (verificarPrimo(numero)) {
    console.log(`${numero} é um número primo.`);
} else {
    console.log(`${numero} não é um número primo.`);
}
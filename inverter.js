/***************************************************************************
Programa que inverte a ordem dos elementos.
*****************************************************************************/

var prompt = require('prompt-sync')();

let entrada = prompt("Digite um número para inverter:");

function inverterString(str) {
    return str.split('')
              .reverse() 
              .join(''); 
}

let resultado = inverterString(entrada);

console.log(`A número invertido é:${resultado}`);
/***************************************************************************
Um programa que lê 5 números, e imprima a média entre eles.
*****************************************************************************/

var prompt = require('prompt-sync')();

var numero1 = Number(prompt("Digite o 1° número:"));
var numero2 = Number(prompt("Digite o 2° número:"));
var numero3 = Number(prompt("Digite o 3° número:"));
var numero4 = Number(prompt("Digite o 4° número:"));
var numero5 = Number(prompt("Digite o 5° número:"));

let Media = (numero1 + numero2 + numero3 + numero4 + numero5) / 5;

console.log("O valor da média dos 5 números é:", Media);

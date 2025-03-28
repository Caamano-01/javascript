/****************************************************************************
programa que lê um número e imprime se este número é par ou ímpar.
*****************************************************************************/

var prompt = require('prompt-sync')();

var Numero = Number(prompt("Digite um número: ")); 

if (Numero % 2 == 0) { 
} else {
  console.log("Ímpar");
}
/***************************************************************************
Programa que calcula o índice de massa corporal.
*****************************************************************************/

var prompt = require('prompt-sync')();

var peso = prompt("Dgite seu peso em quilos:");
var altura = prompt("Dgite sua altura:");

var IMC = (peso) / (altura)**2;
var IMC = IMC.toFixed(2);

console.log("Seu índice de  massa corporal é", IMC);
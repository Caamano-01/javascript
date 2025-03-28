/***************************************************************************
um programa que lê três números e mostre o maior entre eles.
*****************************************************************************/

var prompt = require('prompt-sync')(); 
var Numero1 = Number(prompt("Digite seu número:"));
var Numero2 = Number(prompt("Digite seu número:"));
var Numero3 = Number(prompt("Digite seu número:"));

if(Numero1 > Numero2 && Numero1 > Numero3){
    console.log("O maior número é: " + Numero1);
} else if (Numero2 > Numero1 && Numero2 > Numero3) {
    console.log("O maior número é: " + Numero2);
} else if (Numero3 > Numero1 && Numero3 > Numero2) {
    console.log("O maior número é: " + Numero3);
} else {
    console.log("Existem números igauis.");
}

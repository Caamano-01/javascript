/***************************************************************************
um valor de temperatura em Fahrenheit e exibi-lo em Celsius.
*****************************************************************************/

var prompt = require('prompt-sync')();

var F = Number(prompt("Digite a temperatura em fahrenheit:"));

var Celsius = (5 / 9) * (F - 32);

console.log("Temperatura em Celsius:", Celsius);

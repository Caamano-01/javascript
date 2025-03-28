/***************************************************************************
Programa que tem os funcionamentos básicos de uma calculadora, como soma, 
subtração, multiplicação e divisão.
*****************************************************************************/

var prompt = require('prompt-sync')();

var expressao = prompt("Digite o calculo:");

function calcular(expressao) {
    try {
        let resultado = eval(expressao); 
        console.log("Resultado: " + resultado);
    } catch (error) {
        console.log("Erro: Expressão inválida");
    }
}

calcular(expressao);

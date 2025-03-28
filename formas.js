/***************************************************************************
Programa que calcula a área e perímetro das formas
*****************************************************************************/

var prompt = require('prompt-sync')();

function calcularRetangulo() {
    var base = Number(prompt("Digite a base do retângulo: "));
    var altura = Number(prompt("Digite a altura do retângulo: "));
    var area = base * altura;
    var perimetro = 2 * (base + altura);
    console.log(`Área do retângulo: ${area}`);
    console.log(`Perímetro do retângulo: ${perimetro}`);
}

function calcularQuadrado() {
    var lado = Number(prompt("Digite o tamanho do lado do quadrado: "));
    var area = lado * lado;
    var perimetro = 4 * lado;
    console.log(`Área do quadrado: ${area}`);
    console.log(`Perímetro do quadrado: ${perimetro}`);
}

function calcularCircunferencia() {
    var raio = Number(prompt("Digite o tamanho da circunferência: "));
    var area = Math.PI * Math.pow(raio, 2);
    var perimetro = 2 * Math.PI * raio;
    console.log(`Área da circunferência: ${area.toFixed(2)}`);
    console.log(`Perímetro da circunferência: ${perimetro.toFixed(2)}`);
}

function calcularTriangulo() {
    var lado1 = Number(prompt("Digite o 1° lado do triângulo: "));
    var lado2 = Number(prompt("Digite o 2° lado do triângulo: "));
    var lado3 = Number(prompt("Digite o 3° lado do triângulo: "));
    var perimetro = lado1 + lado2 + lado3;
    console.log(`Perímetro do triângulo: ${perimetro}`);
}

while (true) {
    console.log("\nMenu de Opções:");
    console.log("1 - Calcular Retângulo");
    console.log("2 - Calcular Quadrado");
    console.log("3 - Calcular Circunferência");
    console.log("4 - Calcular Triângulo");
    console.log("5 - Sair");

    var opcao = Number(prompt("Escolha uma opção: "));
    
    switch (opcao) {
        case 1:
            calcularRetangulo();
            break;
        case 2:
            calcularQuadrado();
            break;
        case 3:
            calcularCircunferencia();
            break;
        case 4:
            calcularTriangulo();
            break;
        case 5:
            console.log("Saindo...");
            process.exit();
        default:
            console.log("Opção inválida! Tente novamente.");
    }
}

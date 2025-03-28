/***************************************************************************
Programa que calcula a média do aluno e mostra se esta aprovado ou reprovado.
E mostra se o aluno pode ou não fazer a recuperação
*****************************************************************************/

var prompt = require('prompt-sync')();

var Nota1 = prompt("Digite a primeira nota:");
var Nota2 = prompt("Digite a segunda nota:");
var Nota3 = prompt("Digite a terceita nota:");

let Media_Aluno = 0;
Media_Aluno = (Number(Nota1) + Number(Nota2) + Number(Nota3)) / 3;


console.log(Media_Aluno); 

if(Media_Aluno >= 7)   
  console.log("Aprovado"); 
else if(Media_Aluno >=4)
    console.log("Recuperação");
else
  console.log("Reprovado"); 


if(Media_Aluno <=3.66 && Media_Aluno < 7)
    console.log("Não pode fazer recuperação.");
else
    console.log("Pode fazer recuperação.");
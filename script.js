

/* 
Desenvolver uma calculadora que recebe notas de alunos e calcula a média, 
informando se o aluno foi aprovado ou reprovado. 
*/

/* Usar array para armazenar as notas. */

let notas = []
let soma = notas.reduce((diariodenotas, nota) => diariodenotas + nota, 0)
let media = soma / notas.length;


/* Estruturas de repetição para permitir a entrada de várias notas. */



/* Estruturas de decisão para determinar a aprovação (média >= 7). 
Exibir a média e o status (aprovado/reprovado)
*/


if (media >= 6){
    document.getElementById('Resultado').innerHTML = "Parabéns você foi aprovado!Sua média é:", media
}else{
    document.getElementById('Resultado').innerHTML = "Desculpe você foi reprovado! Sua média é:", media
    }

/* 
Desenvolver uma calculadora que recebe notas de alunos e calcula a média, 
informando se o aluno foi aprovado ou reprovado. 
*/

/* Usar arrays para armazenar as notas. */

let notas = []
let soma = notas.reduce((diariodenotas, nota) => diariodenotas + nota)
let media = soma / notas.length;








/* Estruturas de decisão para determinar a aprovação (média >= 7). 
Exibir a média e o status (aprovado/reprovado)
*/


if (media >= 7){
    document.getElementById('Resultado').innerHTML = "Parabéns você foi aprovado!"
}else{
    document.getElementById('Resultado').innerHTML = "Desculpe você foi reprovado!"
    }
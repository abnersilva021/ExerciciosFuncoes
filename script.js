/*10 atividade

const n1 =  88;
const n2 = 90;

if(n1>n2){
    console.log(n1+ " é maior que n2")
}else{
    console.log(n2+" é maior que n1")
}

///////////////////////////////////  */

/*const n1 = 9;
const n2 = 30;


if(n1>n2){
    console.log(n1 + " o numero é positivo: ")
}else if{
    console.log(n2+ " o numero é negativo ")
}else{
    console.log(" o numero é zero")
}
*/

/*
const n1 = 2;

switch (n1) {
    case 1:
        console.log("é domingo");
        break;
    case 2:
        console.log(" é segunda feira");
        break;
    case 3:
        console.log(" é terça feira");
        break;
    case 4:
        console.log(" é quarta feira");
        break;
    case 5:
        console.log(" é quinta feira");
        break;
    case 6:
        console.log(" é sexta feira");
        break;
    case 7:
        console.log(" é sabado ");
        break;
        debault:
        console.log ("erro os dias da semana")
        break;

}

*/


/*
const n1 = prompt("digite um numero");
const op = prompt("digite 1 para adição 2 para subtração 3 pra multiplicação 4 para ivisão ");
const n3 = prompt("digite outro número");

if(op==1){
    const soma = n1 + n2;
    console.log(n1+ n2);
 }else if(op == 2){
    const sub = n1 - n2;
  console.log(n1-n2);
}else if(op == 3){
    const divi = n1*n2;
    console.log(n1*n2);
}else{
    if(n1==0 || n2 == 0){
    console.log("imposivel divisao por 0");

        } else {
            const div = n1 / n2;
            console.log(div);
        }
    }

    */


/*Atividade 5

const idade = pareInt(prompt("digite seua idade"));
if(idade >=18){
    console.log("maior de idade");
}else{
    console.log("Menor de idade");
}

*/


/*
console.log("Insira sua nota");

const nota = parseInt(prompt("Sua nota de 0 a 100"));

if(nota <= 20 && nota >0){
    console.log("nota F");
}else if(nota > 20 && nota < 40){
    console.log("Nota C");
}else if(nota > 40 && nota <80){
    console.log("Nota B");
}else if(nota >80 && nota <100){
    console.log("Nota A");
}else{
    console.log("Erro nota invalida")
}

*/


/*
console.log( "Atividade ");

const n1 = parseInt(prompt("Digite um numero"));
    let soma = 0;
for(let i = 2; i<=  n1; i +=2){
soma += i;
}
console.log(soma);

*/


/*
const ano = parseInt(prompt("Digite um ano"));

if(ano % 4 ==0){
    console.log("ano bisexto");
}else{
    console.log("nao é bisexto")
}

*/


/*
const numero = parseInt(prompt("Solocite um numero"));

for(let i = numero; i > 0; i--){
    console.log(i);
}

*/

const numero = parseInt(prompt("Solicite o numero"));

let soma1 = 0;
let ant = 0;
let prox = 1;
if (numro9 > 0) {
    console.log("1");
    for (let i = 0; i < numero; i++) {
        soma1 = ant + prox;
        ant = prox;
        prox = soma;
        console.log(soma1);
    }
} else {
    console.log("digite um numero invalido")
}


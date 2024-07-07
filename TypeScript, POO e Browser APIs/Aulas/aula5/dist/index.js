"use strict";
let numero = 20; // Inferência de tipo
// numero = 'aosidjasoid' // assim ele barra a atribuição de strings
const pi = 3.1415;
// pi = 10 // da erro por que é const
let nome = "Bruno";
// nome = 10 // a mesma coisa do exemplo de número, assim que o tipo é inferido ele fica fixo nesse tipo
let correta = true;
let resultado = numero * pi;
// const nomeDoUsuario = prompt('Qual é o seu nome??')
// console.log(nomeDoUsuario?.toLocaleLowerCase)
// number[] ou Array<number>
const numeros = [1, 2, 3, 4, 5];
// ! const numeros: any[] = [1,2,3,4,5, {},()=>{}, true]
// Evite ao máximo usar o any!
// const misto:(string | number)[]/*union type */ = ["Bruno", 27, 1.77]
const idades = [];
idades.push(23);
idades.push(28);
idades.push(12);
idades.push(49);
idades.push(16);
const menoresDeIdade = idades.filter((idade) => idade < 18);
console.log(menoresDeIdade);
for (const idade of idades) {
    console.log(idade);
}
const pessoaTuple = ["Bruno", 27];
const pessoa = {
    nome: "Bruno",
    idade: 27,
    profissao: "Desenvolvedor",
    altura: 1.77,
};
// pessoa.peso = 70 || da erro :/
const pessoa2 = {
    nome: "Helena",
    altura: 1.2,
    idade: 8,
};
console.log(pessoa2);
console.log(pessoa);
pessoa2.profissao = "Estudante";
console.log(pessoa2);
function chooseNumber(num1, num2, criterio) {
    switch (criterio) {
        case "greater":
            return num1 > num2 ? num1 : num2;
        case "lower":
            return num1 < num2 ? num1 : num2;
        default:
            const numAleatorio = Math.random();
            if (numAleatorio >= 0.5)
                return num1;
            return num2;
    }
}
const numEscolhido = chooseNumber(10, 20, 'lower');
console.log("Numero Escolhido: ", numEscolhido);
function somar(num1, num2) {
    return num1 + num2;
}
/* type Pessoas = {
  [x: string]: Person;
} */
// Ele vai criar um objeto, a chave vai ser o tipo que você escolher e o valor vai ser o tipo que você colocar logo após,
const pessoas = {
    '123.456.789-00': {
        nome: 'Fulano',
        altura: 1.7,
        idade: 21
    },
    '123.456.789-01': {
        nome: 'Fulana',
        altura: 1.5,
        idade: 22
    }
};

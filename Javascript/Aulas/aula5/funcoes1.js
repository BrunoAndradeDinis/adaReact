const prompt =  require("readline-sync")

// Exemplo 1
// Definição da função
function saudacao (nomeDoEstudante, materia = "Front-end em React"){ // materia = "Front-end em React" -> É o parametro padrão, se  não passar nada nesse padrão ele passa esse dado por default
  // template string || tremplate literals
  return `Olá, ${nomeDoEstudante}! \nSeja bem vindo ao curso de ${materia}!`
}
saudacao() //  chamada da função 
let nome = prompt.question("Qual o seu nome? \n")
let curso = "Front-end em React"
const mensagemdaSaudacao = saudacao(nome, curso)

console.log(mensagemdaSaudacao)
console.log(saudacao("Brinu"))

// Exemplo 2
console.clear()
function somar(num1, num2){
  return num1 + num2
}

const resultado = somar(1,9867)
console.log(resultado)
console.log(resultado / 10)


// --------------------------------------------
// Funções anônimas 
console.clear()

let dobroDoNum = function(numero){
  return numero * 2
}
console.log(dobroDoNum(8))

// Arrow functions: Função de seta

const subtrair = (num1, num2) => {
  return num1 - num2;
 }

const multiplicar = (num1, num2) => num1 + num2;

const triplo = numero => numero * 3; // omitindo os parenteses no parâmetro 


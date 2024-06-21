const prompt = require('readline-sync')

const idade = Number(prompt.question('Qual eh a sua idade? \n'))

const ehMaiorDeIdade = idade >= 18

console.log(ehMaiorDeIdade)

// Estrutura condicional: if/else

if(ehMaiorDeIdade){
  // faça alguma coisa
  console.log('Você é maior de idade!')
} else {
  console.log("Você é menor de idade.")
}

const mediaDoAluno = 10

// Média >=7 => aprovado
// Média < 7 e Média >=5 => Prova final 
// Média < 5 => Reprovvado

if(mediaDoAluno >= 7){
  console.log("Aprovado!")
  console.log("Parabéns! 😁👏")
} else if ( mediaDoAluno >= 5){
  console.log("Prova final!")
} else {
  console.log("Reprovado")
}


// 1. Preciso ser maior de idade
// 2. Preciso ter uma CNH

const idadeDaPessoa = 18
const temCNH = true

if (idadeDaPessoa >= 18 && temCNH){
  console.log("Você pode dirigir!")
} else {
  console.log("Você não pode dirigir!")
}



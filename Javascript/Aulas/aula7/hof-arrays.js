// Array.prototype.every(): verifica se todos os elementos de um array seguem uma determinada condição retornada pela função
const numeros = [40,34,67,89,23,10]

// numeros.every((elemento, index, arrayCompleto) =>{

// })

const todosPositivos = numeros.every((elemento) => elemento >= 0 /*30 - false */)

console.log(todosPositivos) // true - ele só retona boolean

const pessoas = [
  {
    nome: "Pessoa 1",
    idade: 34,
    altura: 1.75
  },
  {
    nome: "Pessoa 2",
    idade: 25,
    altura: 1.56
  },
  {
    nome: "Pessoa 3",
    idade: 46,
    altura: 1.82
  }
]

const todosMaioresDeIdade = pessoas.every((elemento) => elemento.idade >= 18 && elemento.altura >= 1.78)

console.log(todosMaioresDeIdade)

// Array.prototype.some (): ele vai verificar se algum elemento do array é verdadeira para a condição aplicada pela função

const numeros2 = [-1,3,7,-3,5]

const retorno = [numeros2.some((numero) => numero > 0)]

retorno.push(pessoas.some((elemento) => elemento.idade >= 18 && elemento.altura >= 1.78))

console.log(retorno)



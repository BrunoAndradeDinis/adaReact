// Funções de Alta Ordem de Arrays

// 1. Array Array.prototype.foreach()
const numeros = [40,34,67,89,23,10]

function imprimirElemento(e){
  console.log(e)
}

numeros.forEach(imprimirElemento)

numeros.forEach((elemento, index, arrayCompleto)=>{
  console.log(elemento, index, arrayCompleto)
})

// 2. Array Array.prototype.find()

const encontrado = numeros.find((numero) => {
  return numero > 50
})
console.log(encontrado)

  // array de objetos
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

const encontrarPessoa = pessoas.find((pessoa) => pessoa.idade > 20 && pessoa.altura < 1.7 )
console.clear()
console.log(encontrarPessoa)

// 3. Array.prototype.findIndex(): muito parecido com o find(), porém ele retorna o índice do elemento encontrado
const encontrarIndicePessoa = pessoas.findIndex((pessoa) => pessoa.idade > 20 && pessoa.altura < 1.7 )
console.clear()
console.log(encontrarIndicePessoa)


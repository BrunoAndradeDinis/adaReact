// Array.prototype.filter(): sempre retorna um array de tamanho igual ou inferior ao tamanho do array original conforme a condição passada no mesmo

const valores = [39,45,32,24,4,22,2,49,23,8] 

const parEncontrado = valores.find((valor) => valor % 2 === 0)

const paresEncontrados = valores.filter((valor) => valor % 2 === 0)

console.log(parEncontrado) // ele sempre retorna o primeiro elemento que corresponde ao elemento
console.log(paresEncontrados) 

// Exemplo 1: dados de alunos

const alunos = [
  {nome: 'Quincy', media: 96},
  {nome: 'Jason', media: 84},
  {nome: 'Alexis', media: 100},
  {nome: 'Sam', media: 65},
  {nome: 'Katie', media: 90},
]

const alunosComMediaSuperiorA85 = alunos.filter((aluno) => aluno.media > 85)

console.log(alunosComMediaSuperiorA85)

// Exemplo 2

const produtos = [
  {nome: "Suco de laranja", preco: 7.50, tipo: "Bebida"},
  {nome: "Batata Frita", preco: 10.50, tipo: "Comida"},
  {nome: "Pizza", preco: 12.49, tipo: "Comida"},
  {nome: "Chocolate", preco: 1.50, tipo: "Comida"},
  {nome: "Pastel", preco: 4.50, tipo: "Comida"},
  {nome: "Coca Cola", preco: 6.99, tipo: "Bebida"},
]
const produtosFiltrados = produtos.filter((produto) => produto.preco < 10 && produto.tipo !== "Bebida")

console.log(produtosFiltrados)

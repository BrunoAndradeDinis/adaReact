// Array.prototype.map(): Um método que chama a função que passada como parâmetro para cada elemento do array, e devolve um novo array como resultado.
// Ele cira um novo array que possui o "mesmo tamanho do array original"
// composto pelos elementos que foram retornados a cada iteração 

const numeros = [40, 34, 67, 89, 23, 16, 10];

// numeros.map((Element, index, arracompleto) => {})
const novoArray = numeros.map((Element) => {
  console.log();
});


// Exemplo 1: Elevando todos os números ao quadrado
const valores = [39,45,32,24,4,22,2,49,23,8]
const valorAoQuadrado = valores.map((valor) => valor ** 2)

console.log(valorAoQuadrado)

// Exemplo 2: Adicionando uma propriedade aos objetos do array

// const pessoa = {
//   nome: 'Bruno',
//   idade: 27,
//   altura: 1.75
// }
//  // Desestruturação ou spread (operator)
// const pessoaComPeso = {
//   ...pessoa,
//   peso: 70
// }

// console.log(pessoa)
// console.log(pessoaComPeso)

const carrinho = [
  { produto: "Feijão", preco: 7.98, quantidade: 3},
  { produto: "Arroz", preco: 4.98, quantidade: 5},
  { produto: "Leite 1L", preco: 6.99, quantidade: 2},
]

const carrinhoComTotal = carrinho.map((itemDoCarrinho) => {
  return {
    ...itemDoCarrinho,
    total: (itemDoCarrinho.preco * itemDoCarrinho.quantidade).toFixed(2)
    }
})

console.log(carrinhoComTotal)


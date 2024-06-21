const produtos = [
  {nome: "Suco de laranja", preco: 7.50, tipo: "Bebida"},
  {nome: "Batata Frita", preco: 10.50, tipo: "Bebida"},
  {nome: "Pizza", preco: 12.49, tipo: "Bebida"},
  {nome: "Chocolate", preco: 1.50, tipo: "Bebida"},
  {nome: "Pastel", preco: 4.50, tipo: "Bebida"},
  {nome: "Coca Cola", preco: 6.99, tipo: "Bebida"},
]
const produtosFiltrados = produtos.filter((produto) => produto.preco < 10 )

console.log(produtosFiltrados)

// Array.prototype.reduce():

const numeros = [1, 2, 3, 4, 5];

/* 
numeros.reduce((acumulador, elemento, index, ArrayCompleto) => {
  return elemento + acumulador;
}, 0);
*/
const soma = numeros.reduce((acumulador, elemento) => {
  console.log(acumulador);
  return elemento + acumulador;
}, 0);

console.log(soma);

const media = numeros.reduce((acumulador, elemento, _/*ignora o indice*/, ArrayCompleto) => {
  return elemento / ArrayCompleto.length + acumulador;
}, 0);

console.log(media)

// exemplo 2

const somaDosPares = numeros.reduce((acumulador, numero) => {
  // se o numero for par
  if (numero % 2 === 0){
    return numero + acumulador
  } else {
    return acumulador
  }
}, 0)

console.clear()
console.log(somaDosPares)

// exemplo 2 : total a pagar do carrinho

const carrinho = [
  { produto: "Feijão", preco: 7.98, quantidade: 3},
  { produto: "Arroz", preco: 4.98, quantidade: 5},
  { produto: "Leite 1L", preco: 6.99, quantidade: 2},
]

const totalApagar = carrinho.reduce((acumulador, item) => {
  return item.preco * item.quantidade + acumulador
},0)

console.log(totalApagar)
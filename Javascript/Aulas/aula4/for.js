import { prompt } from "readline-sync";

let i;
/*
  expressão 1: inicialização da variável de controle
  expressão 2: condição de parada do for(condição que define quando irá ocorrer a parada do for)
  expressão 3: o incremento da variável de controle
  for( expressão 1; expressão 2; expressão 3){
    escopo do for
  }
*/ 

for(let i; i < 5; i++){
  console.log(i)
}

// limpando o console
console.clear()

// Exemplo 1
let maiorNumero = 0
let numeroInformado;

for(let i; i < 5; i++){
  numeroInformado = Number(prompt.question("Informe um número positivo"))

  if (numeroInformado > maiorNumero){
    maiorNumero = numeroInformado
  }
}

console.log("Maior número: ", maiorNumero)

// Exemplo 2: percorrendo strings com o for
const nome = "Bruno"

console.log(nome.length)

for(let i = 0; i < nome.length; i++){
  console.log(nome[i])

  if (i == 2){
    break
  }
}

// ARRAYS
const array = []

const notaDoAluno = [10,8,5]
const pessoa = ["Bruno", 27, 1.75, true]
console.log(notaDoAluno)
console.log(pessoa)
console.log(pessoa[1])

pessoa[3] = false
console.log(pessoa)


// Fatiamento de arrays
const numeros = [40,34,67,89,23,10]

console.log(numeros.slice(0, 2 )) // (0) a posição que começa, (2) a quantidade que vai pegar desde a posição inicial
console.log(2) // como não declarou o inicio, vai da posição 2 até o final

// Adicionando elementos no fianal do array
numeros.push(98)
console.log(numeros)

// Adicionar elementos no inicio do array
numeros.unshift(-1)
console.log(numeros)

// Remover o elemento que está no final do array
numeros.pop() // Remove o elemento do final do array
console.log(numeros)

// Remover o elemento que está no começo do array
numeros.shift() // Remmove o elemento do inicio do array
console.log(numeros)

// Será que o elemento 20 existe no array numeros?
console.clear()
console.log(numeros.includes(20))
console.log(numeros.includes(10))

if (numeros.includes(10)){
  console.log("Opa! Existe o numero 10 dentro do array numeros!")
}

let existenumero10 = numeros.includes(10)

// indexOf
const indiceDoElemento10 = numeros.indexOf(10)
console.log(indiceDoElemento10) // se retornar -1 é por que o número não existe

// lasIndexOf
const indiceDoElementox = numeros.lastIndexOf(10)
console.log(indiceDoElementox) // ele conta a partir do ultimo item

// percorrendo arrays com for
const arr = [45,36,90,76,32,7]

for(let i = 0; i < arr.length; i++){
  console.log(i, arr[i])
}

// For-of 

for (const elemento of arr){ // o for of corre pelos elemento e não o indice
  console.log(elemento)
}

// For in

for (const indice in arr){ // o for in percorre o indice dos arrays
  console.log(indice, typeof indice)
  console.log(arr[indice])
}

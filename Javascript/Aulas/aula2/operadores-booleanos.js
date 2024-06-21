// Operadores booleanos: Comparações

const numero1 = 10
const numero2 = 12

console.log(numero1 == numero2) // false
console.log(numero1 === numero2) // false
console.log(numero1 === '10') // false - valida também o tipo do dado
console.log(numero1 == '10') // false - valida o valor

console.log(numero1 !== numero2) // true
console.log(numero1 != '10') // false

console.log(numero1 >= numero2)

const idadePessoa1 = 16
const idadePessoa2 = 39

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18)
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18)

console.log(!true) // not/negação

console.log(!(idadePessoa1 >= 18)) // retorna verdadeiro se a pessoa for meno de idade

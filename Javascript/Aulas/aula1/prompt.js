const prompt = require('readline-sync')

const idade = prompt.question("Qual eh a sua idade? \n")

const idadeNumber = Number(idade)

// Coerção Explicita ( Conversão Manual)
console.log('A sua idade é ', idadeNumber, typeof idadeNumber)

console.log(Number('x'))
console.log(String('10'), typeof String('10'))

console.log(Boolean(2), typeof Boolean(2))
console.log(Boolean(0), typeof Boolean(0))
console.log(Boolean(-1), typeof Boolean(-1))

// Coerção Implicita ()
console.log(1 + "1") // 11 - aqui ele tenta fazer a conversão normal, o mais próximo seria realizar uma concatenação
console.log(10 + "5") // 105
console.log("10" + 5) // 105
console.log(10 - "5") // 5
console.log(10 * "5") // 50
console.log(10 / "5") // 2


// Qual será a saída desse código?
let n = 1 + '1'

n = n - 1

console.log(n) // 10

// Qual será a saída desse código?
console.log( 2 + 3 + 4 + '5') // 95

// Qual será a saída desse código?
console.log('5' + 2 + 3 + 4) // 5234

// Qual será a saída desse código?
console.log('10' - '4' - '3' - 2 + '5') //15
// High order functions

// 1. Função que retorna outra função como parâmetro (Cloudjure)

function welcome(courseName ){
  // console.log(`Olá, ${studentName}! Seja bem-vindo ao curso de ${courseName}`)
  return (studentName)=>{
    console.log(`Olá, ${studentName}! Seja bem-vindo ao curso de ${courseName}!`)
  }
  
}

// welcome("Frontend em React")

const displayWelcomeToFrontEndCourse = welcome("Frontend em React")

displayWelcomeToFrontEndCourse("Bruno")
console.clear()

// 2. Função que recebe outra função como parâmetro
const somar = (num1, num2) => num1 + num2
const subtrair = (num1, num2) => num1 - num2
const multiplicar = (num1, num2) => num1 * num2
const dividir = (num1, num2) => num1 / num2

const calcular = (num1, num2, operacao) => operacao(num1, num2)

// operacao: função que a operação entre os dois números ou seja, ela que precisa ser uma função que receba dois números

console.log(calcular(2,2, somar))
const retorno = calcular(10,5, multiplicar)

console.log(retorno)

// O calculo que eu quero fazer é: (num1 * num2) + (2 * num1 * num2)

console.log(calcular(10,5, (num1, num2) => num1 * num2 + (2 * num1 * num2)))


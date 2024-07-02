const num1 = 4
const num2 = 40 // undefined

console.log("Typescript")
console.log(num1 + num2) // 45 // NaN

function somar(num1: number, num2:number){
  return num1 + num2;
}

const resultado = somar(3,5)

console.log(resultado)
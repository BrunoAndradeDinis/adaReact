
// Array foreach()
const numeros = [40,34,67,89,23,10]

function imprimirElemento(e){
  console.log(e)
}

numeros.forEach(imprimirElemento)

numeros.forEach((elemento, index, arrayCompleto)=>{
  console.log(elemento, index, arrayCompleto)
})

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

for ( const indice in arr){ // 
  console.log(indice)
}

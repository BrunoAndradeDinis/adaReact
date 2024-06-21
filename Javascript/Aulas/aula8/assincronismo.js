const fs = require("fs");

// * 1. Callbacks

// Exemplo 1
console.log("Antes de ler o arquivo ...");

// função assincrona (ler um arquivo leva um tempo)
/* 
fs.readFile('../../../../../../../Estudos/Ada/Ada - React/Javascript/Aulas/aula8/arquivo.txt', (erro, conteudoDoArquivo ) => {
  if(erro){
    console.log("Ocorreu um erro ao tentar ler o arquivo: ", erro)
  } else{
    console.log(String(conteudoDoArquivo))
  }
} )

console.log("Depois da função de ler o arquivo ...")
*/

// Exemplo 2: setTimeout (função que cria um timer)
/*
console.log("Antes do setTimeout!")

setTimeout(()=>{
  console.log("Isso aqui vai ser executado após 2 segundos!")
}, 2 * 1000)
console.log("Depois do setTimeout!")
*/

// * 2. Promises (promessas)
/*
console.log("antes da criação da promise");
*/
function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      "../../../../../../../Estudos/Ada/Ada - React/Javascript/Aulas/aula8/arquivo.txt",
      (erro, conteudoDoArquivo) => {
        if (erro) {
          reject("Ocorreu um erro ao tentar ler o arquivo: ", erro);
        } else {
          resolve(String(conteudoDoArquivo));
        }
      }
    );
  }); // criando uma promessa.
}
/*
// Foco a partir daqui...
lerArquivoPromise()
  .then((retornoDoResolveDaPromise) => {
    console.log("Deu certo: ", retornoDoResolveDaPromise);
  })
  .catch((erro) => {
    console.log("Deu ruim: ", erro);
  })
  .finally(() => {
    console.log(
      "Isso aqui vai ser executado, independente do sucesso ou fracasso da promessa, no final deal."
    );
  });
*/

// * 3. async/await

console.clear();
async function leituraDeDados() {
  console.log("Isso é executado antes da promise ser resolvida!");

  try{
    const retornoDaPromessa = await lerArquivoPromise(); // espera a promessa ser resolvida para avançar no código
    console.log(retornoDaPromessa)
    console.log("Isso é executado DEPOIS da promise ser resolvida!");
  } catch(err){
    console.log("Deu ruim: ", err)
    console.log("Isso aqui é executado depoiis da promise (com erro).")
  } finally{
    console.log("Deu bom!")
  }

}

leituraDeDados()
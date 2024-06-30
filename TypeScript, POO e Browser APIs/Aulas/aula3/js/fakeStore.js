// Fake Store

async function getUsers() {
  try {
    const resposta = await fetch(
      "https://fakestoreapi.com/users?limit=5"
    ); /*, {
      headers:{
        "app-id": "34567hfew45u87g54"
      }
    }*/
    const users = await resposta.json();

    console.log(users);
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    console.log("Deu bom demais!");
  }
}

getUsers();
console.log("foi");

async function getUser() {
  try {
    const resposta = await fetch("https://fakestoreapi.com/users/5");
    const user = await resposta.json();

    console.log(user.name);
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    console.log("Deu bom demais!");
  }
}
getUser();

async function createUser() {
  try{
    const userData = {
      email: "brinu@gmail.com",
      username: "Brinu",
      password: "m38rmF$",
      name: {
        firstname: "Brinu",
        lastname: "CIlada",
      },
      address: {
        city: "kikoo",
        street: "new road",
        number: 3,
        zipcode: "12326-3874",
        geolocation: {
          lat: "-37.3129",
          long: "81.1426",
        },
      },
      phone: "1-570-236-7133",
    };
  
    const resposta = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const retorno = await resposta.json()

    console.log(retorno)
  } catch (error){
    console.log("Erro: ", error)
  } finally{
    console.log("Criou e rodou liso liso")
  }

}

createUser()

async function deleteUser(){
  try{
    const resposta = await fetch("https://fakestoreapi.com/users/7",{
      method: "DELETE"
    })
    const retorno = await resposta.json()

    console.log(retorno)
  } catch(error){
    console.log(error)
  } finally{
    console.log("Apagado com sucesso")
  }
}

deleteUser()
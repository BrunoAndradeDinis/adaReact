import React from "react";

export class Counter extends React.Component {
  constructor(){
    super()
    
    this.state = {contador: 0}

    console.log('Construindo a classe counter!');
  }

  UNSAFE_componentWillMount(){
    console.log('O nosso componente contador será montado!')
  }

  componentDidMount(){
    console.log("O nosso componente foi montado! ✅")

    document.addEventListener('scroll', this.consoleScroll)
  }
  // método chamado sempre que uma prop ou estado atualizar
  shouldComponentUpdate(){
    if(this.state.contador === 2) return false
    else return true
  }
  
  UNSAFE_componentWillUpdate(){
    console.log("O componente será atualizado! ")
  }

  componentDidUpdate(){
    console.log("O componente ja atualizou!")
  }

  componentWillUnmount(){
    console.log("O componente será desmontado...")
    document.removeEventListener('scroll', this.consoleScroll)
  }
  consoleScroll(){
    console.log("Rolando a página")
  }
  render() {
    console.log("Rederizando o nosso componente counter!")
    return (
      <div>
        <h1>{this.state.contador}</h1>
        <button onClick={() => this.setState({ contador: this.state.contador - 1})}>Diminuir </button>
        <button onClick={() => this.setState({ contador: this.state.contador + 1})}>Aumentar</button>
      </div>
    )
  }
}

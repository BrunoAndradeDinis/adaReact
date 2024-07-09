import React from 'react'
import { Counter } from './componentes/Counter/Counter';

class App extends React.Component {
  constructor(){
    super()

    this.state = {showCounter: false};

  }
  render(){
    return (
      <div className="App">
        <h1>Ciclo de vida no React</h1>

        <button onClick={()=>{
          this.setState({showCounter: !this.state.showCounter})
        }}>{!this.state.showCounter ? "Mostrar contador": "Remover contador"}</button>

        {this.state.showCounter ? <Counter/> : null}
        {/* {this.state.showCounter && <Counter/> } */}
      </div>
    );
  }
}

export default App;

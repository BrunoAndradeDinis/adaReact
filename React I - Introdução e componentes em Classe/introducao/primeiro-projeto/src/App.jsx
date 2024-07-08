import React, { Fragment } from "react";
import "./styles/App.css";
import {Navbar} from "./components/NavBar/Navbar";
import { Article } from "./components/Article/Article";
import article1 from './assets/images/space.jpg'
import article2 from './assets/images/space.webp'
import article3 from './assets/images/article1.jpg'
import { Counter } from "./components/Counter/Counter";

// Componente em classe é uma classe que herda a classe component do react e retorna HTML dentro do método Render

class App extends React.Component {
  render() {
    // mètodo responsável por rederizar o conteúdo HTML do nosso componente
    return (
      <>
        <Navbar />
        <section className="articles">
          <Article thumbnail={article3} title='Designing Dashboards' provider="NASA" description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellat suscipit rem ad consectetur ex cumque fuga at distinctio eveniet facilis quaerat voluptates, quo vitae porro accusantium veniam nam. Excepturi!"/>
         
          <Article thumbnail={article1} title='Vibrants portraits' provider="Space news" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque rem, velit cupiditate, ducimus commodi accusantium omnis delectus, blanditiis eligendi ut. Facere ratione cupiditate porro voluptas veritatis impedit beatae. Reiciendis?"/>
          
          <Article thumbnail={article2} title='36 days of Malayalam type ' provider="Spaceflight Now" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam harum ea qui aliquam hic exercitationem delectus cupiditate ducimus nesciunt! Doloremque, necessitatibus omnis beatae fugiat similique esse dolorum ad quos voluptatem."/>
          
          <Article thumbnail={article3} title='Designing Dashboards' provider="NASA" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, exercitationem. Quo deserunt dolores, placeat perferendis asperiores quidem aperiam libero, similique magni fugit odit fugiat eaque quisquam incidunt ipsam sequi possimus?"/>
          
        </section>

        {/* <Counter /> */}
      </>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <h1>Bruno de andrade</h1>
//     </div>
//   );
// }

export default App;

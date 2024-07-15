import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header/Header";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Componente estilizado
// const Title = styled.h1`
//   font-size: 2rem;
//   color: blue;
//   padding: 0 2rem;
//   p {
//     background-color: purple;
//     font-size: 1rem;
//     color: aliceblue;
//   }
// `;
// Componente Funcional do React
function App() {
  return (
    <Provider store={store}>
      <Header/>
      <ProductsList/>

      <GlobalStyles/>
    </Provider>
  );
}

export default App;

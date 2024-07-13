import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header/Header";
import { ProductCard } from "./components/ProductCard/ProductCard";

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
    <>
      <Header/>
      <ProductCard/>

      <GlobalStyles/>
    </>
  );
}

export default App;

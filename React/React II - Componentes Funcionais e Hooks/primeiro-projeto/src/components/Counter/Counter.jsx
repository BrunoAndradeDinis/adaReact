import React, { useState } from "react";

export const Counter = () => {
  // this.contador = 0;
  const [contador, setContador] = useState(0)
  // useState = { contador: 0, name: '', password: ''};

  return (
    <div style={{ marginTop: "20px", padding: "20px", marginLeft: "20px" }}>
      <h1>{contador}</h1>

      <div style={{ display: "flex", gap: ".5rem" }}>
        <button
          onClick={() => {
            setContador(contador - 1)
          }}
        >
          Diminuir
        </button>
        <button
          onClick={() => {
            setContador(contador + 1)
          }}
        >
          Aumentar
        </button>
      </div>

    </div>
  );
}

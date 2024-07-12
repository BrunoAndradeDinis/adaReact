import { FormEvent, useEffect, useRef, useState } from "react";

export const Refs: React.FC = () => {
  const inputNameRef = useRef<HTMLInputElement>(null); // {current: null} ele vai fazer, em tese, um queryselector e usar de referência a nosso inputRef e jogar o valor dentro do current.
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  function handleOnSubmit(event: FormEvent) {
    event.preventDefault(); // evita que a página seja recarregada ao submeter o form
    console.log(
      inputNameRef.current?.value,
      inputEmailRef.current?.value,
      inputPasswordRef.current?.value
    )
  }
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "4rem",
        gap: ".5rem",
      }}
      onSubmit={(event) => handleOnSubmit(event)}
    >
      <h1>useRef</h1>

      <br />
      <input type="text" placeholder="Nome completo" ref={inputNameRef} />
      <input type="email" placeholder="E-mail" ref={inputEmailRef} />
      <input type="password" placeholder="Senha" ref={inputPasswordRef} />
      <button type="submit">Enviar</button>
      <br />
    </form>
  );
};

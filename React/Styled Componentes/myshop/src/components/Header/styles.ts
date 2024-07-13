import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: navy;

`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 4rem;
`

export const HeaderTitle = styled.h1`
  color: aliceblue;
  font-size: 1.6rem;
  font-weight: 600;
`

export const AuthButton = styled.button`
  border: none;
  border-radius: .5rem;
  padding: 0 1rem;
  height: 2rem;
  background-color: lightgreen;
  color: #222;
  font-size: .9rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.3rem;

  svg{
    font-size: .7rem;
  }
`

export const CartButton = styled.button`
  border: none;
  border-radius: .5rem;
  padding: 0 1rem;
  height: 2rem;
  background-color: violet;
  color: #222;
  font-size: .9rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.3rem;

  svg{
    font-size: .7rem;
  }
`


export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`
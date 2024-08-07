import styled from "styled-components";

interface ContainerProps {
  showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => props.showCart ? '0px' : '-350px'};
  height: 100vh;
  width: 350px;
  background-color: aliceblue;
  padding: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow: scroll;
  
  &::-webkit-scrollbar{
    width: 0;
  }
`;

export const Title = styled.h1``;

export const CartProductList = styled.ul`
  padding: 2rem 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 1rem
`

export const CartProductItem = styled.li`
  border: 1px solid #222;
  padding: 0.5rem;
  border-radius: .3rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const CartTotal = styled.strong`
`

export const TrashButton = styled.button`
  border: none;
  margin: 0 .5rem;
  background-color: transparent;

  &:hover{
    transform: scale(1.2);
  }
`
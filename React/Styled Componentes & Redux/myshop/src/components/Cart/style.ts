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
`;

export const Title = styled.h1``;

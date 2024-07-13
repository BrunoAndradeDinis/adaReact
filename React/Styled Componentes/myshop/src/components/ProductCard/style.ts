import styled from "styled-components";

export const Card = styled.article`
  background-color: aliceblue;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
`;

export const ProductImage = styled.img`
  width: 90%;
`;

export const ProductTitle = styled.h2`
  font-weight: 200;
  font-size: 1.2rem;
`;

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const Review = styled.span``;

export const Price = styled.strong``;

export const AddToCartButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const AddToCartButton = styled.button`
    border: none;
  border-radius: .5rem;
  padding: 0 1rem;
  height: 2rem;
  background-color: navy;
  color: aliceblue;
  font-size: .9rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.3rem;

  svg{
    font-size: .7rem;
  }
`;

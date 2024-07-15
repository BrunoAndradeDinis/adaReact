import styled from "styled-components";

export const Card = styled.article`
  background-color: aliceblue;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 250px;
  height: 400px;

  object-fit: contain;
`;

export const ProductTitle = styled.h2`
  font-weight: 200;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

export const Review = styled.span`
  display: flex;

  font-size: 0.7rem;
  gap: .2rem;

  svg{
    font-size: 1rem;
  }
`;

export const Price = styled.strong``;

export const AddToCartButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  width: 100%;
  align-items: center;
`

export const AddToCartButton = styled.button`
  border: none;
  border-radius: .5rem;
  height: 3rem;
  background-color: navy;
  color: aliceblue;
  font-size: .9rem;
  cursor: pointer;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: center;
  svg{
    font-size: .7rem;
  }
`;
export const RemoveFromCartButton = styled.button`
  border: none;
  border-radius: .5rem;
  height: 3rem;
  background-color: violet;
  color: #222;
  font-size: .9rem;
  cursor: pointer;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: center;
  svg{
    font-size: .7rem;
  }
`;
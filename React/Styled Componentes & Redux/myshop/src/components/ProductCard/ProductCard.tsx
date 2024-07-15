import { FiShoppingCart } from "react-icons/fi";
import * as S from "./style";
import { Product } from "../../data/products";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <>
      <S.Card>
        <S.ProductImage src={product.image} alt={product.description} />
        <S.ProductTitle>{product.title}</S.ProductTitle>
        <S.ReviewPriceContainer>
          <S.Review>
            {Array.from({ length: 5 }).map((_, index) =>
              index < Math.round(product.rating.rate) ? (
                <AiFillStar key={index+ 1} />
              ) : (
                <AiOutlineStar key={index+ 1}/>
              )
            )}
            {`(${product.rating.rate})`}{" "}
          </S.Review>
          <S.Price>{`$ ${product.price.toFixed(2)}`}</S.Price>
        </S.ReviewPriceContainer>
        <S.AddToCartButtonWrapper>
          <S.AddToCartButton>
            Adicionar ao carrinho
            <FiShoppingCart />
          </S.AddToCartButton>
        </S.AddToCartButtonWrapper>
      </S.Card>
    </>
  );
};

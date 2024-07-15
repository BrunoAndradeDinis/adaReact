import { FiShoppingCart } from "react-icons/fi";
import * as S from "./style";
import { Product } from "../../data/products";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { rootReducer, RootReducer } from "../../redux/root-reducer";
import { addProduct, removeProduct } from "../../redux/Cart/cart-slice";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );
  const dispatch = useDispatch();

  // variável booleana que informa se o produto está no carrinho
  const isProductOnCart =
    cart.find((productOnCart) => product.id === productOnCart.id) !== undefined;

  function handleAddProductToCart() {
    // despachar a action de adicionar o produto ao carrinho
    dispatch(addProduct(product))
    // dispatch({
    //   type: "cart/add-product",
    //   payload: product,
    // });
  }

  function handleRemoveProductFromCart(){
    // despachar a action de remover o produto do carrinho 
    dispatch(removeProduct(product))

    // dispatch({
    //   type: "cart/remove-product",
    //   payload: product,
    // });
  }
  return (
    <>
      <S.Card>
        <S.ProductImage src={product.image} alt={product.description} />
        <S.ProductTitle>{product.title}</S.ProductTitle>
        <S.ReviewPriceContainer>
          <S.Review>
            {Array.from({ length: 5 }).map((_, index) =>
              index < Math.round(product.rating.rate) ? (
                <AiFillStar key={index + 1} />
              ) : (
                <AiOutlineStar key={index + 1} />
              )
            )}
            {`(${product.rating.rate})`}{" "}
          </S.Review>
          <S.Price>{`$ ${product.price.toFixed(2)}`}</S.Price>
        </S.ReviewPriceContainer>
        <S.AddToCartButtonWrapper>
          {!isProductOnCart ? (
            <S.AddToCartButton onClick={handleAddProductToCart}>
            Adicionar ao carrinho
            <FiShoppingCart />
          </S.AddToCartButton>) : (
            <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
            Remover do carrinho
            <FiShoppingCart />
          </S.RemoveFromCartButton>)}
        </S.AddToCartButtonWrapper>
      </S.Card>
    </>
  );
};

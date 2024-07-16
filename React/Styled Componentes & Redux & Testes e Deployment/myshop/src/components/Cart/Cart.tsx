import { useDispatch } from "react-redux";
import * as S from "./style";
import { Product, products } from "../../data/products";
import { FiTrash } from "react-icons/fi";
import { removeProduct } from "../../redux/Cart/cart-slice";

interface CartProps {
  showCart: boolean;
  cart: Product[]
}

export const Cart: React.FC<CartProps> = ({showCart, cart }) => {
  // const {cart} = useSelector((rootReducer: RootReducer)=> rootReducer.cartReducer )

  const dispatch = useDispatch()

  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price
  },0).toFixed(2)
  return (
      <S.Container showCart={showCart}>
        <S.Title>Carrinho</S.Title>

        <S.CartProductList>
          {cart.map(product => (
            <S.CartProductItem key={product.id}>
              <strong>{product.title}</strong> - ${product.price.toFixed(2)}
              <S.TrashButton onClick={() => dispatch(removeProduct(product))}><FiTrash/></S.TrashButton>
            </S.CartProductItem>
          ))}
        </S.CartProductList>

        <S.CartTotal data-testid='total'>
          Total: ${total}
        </S.CartTotal>
      </S.Container>
  );
};

import { FiLogIn, FiShoppingCart, FiLogOut } from "react-icons/fi";
import * as S from "./styles";
import { useState } from "react";
import { Cart } from "../Cart/Cart";
import { RootReducer } from "../../redux/root-reducer";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/User/user-slice";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
  );

  const {cart} = useSelector((rootReducer: RootReducer)=> rootReducer.cartReducer )

  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);

  const isLogged = user !== null;

  function handleUserAuth() {
    // Usuário não esta logado
    if (user === null) {
      // Despachar a action de login
      dispatch(login({
        name: "Bruno de Andrade",
        email: "email.bruno@email.com",
      }))

      // dispatch({
      //   type: "user/login",
      //   payload: {
      //     name: "Bruno de Andrade",
      //     email: "email.bruno@email.com",
      //   },
      // });
    } else {

      dispatch(logout({}))
      // dispatch({
      //   type: "user/logout",
      // });
    }
  }

  console.log(user);

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop</S.HeaderTitle>
        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>
          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>
      <Cart showCart={showCart} cart={cart}/>
    </S.StyledHeader>
  );
};

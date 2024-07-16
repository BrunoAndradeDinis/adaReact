import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { products } from "../../data/products";
import userEvent from "@testing-library/user-event";
import { removeProduct } from "../../redux/Cart/cart-slice";
import { useSelector } from "react-redux";

const cart = products.slice(0, 2); // obrendo os dois primeiros produtos do array
const mockDispatch = jest.fn();
// Mock: tornar a biblioteca react-redux, em algo fake
jest.mock("react-redux", () => {
  return {
    useDispatch: () => {
      return mockDispatch;
    },
  };
});

describe("Cart > Unit tests", () => {
  it("should render an empty cart correctly", () => {
    render(<Cart showCart={true} cart={[]} />);

    const titleElement = screen.getByRole("heading", { level: 1 });
    const totalElement = screen.getByTestId("total");
    const cartListElement = screen.getByRole("list"); //ul or ol

    // screen.debug(totalElement)

    expect(cartListElement).toBeEmptyDOMElement();
    expect(totalElement).toHaveTextContent("$0.00");
    expect(titleElement).toHaveTextContent("Carrinho");
  });

  it("should render a cart with two products", () => {
    render(<Cart showCart={true} cart={cart} />);

    const productsItemElements = screen.getAllByRole("listitem"); // li
    const firstProductTitleElement = screen.getByText(cart[0].title);
    const secondProductTitleElement = screen.getByText(cart[1].title);

    expect(productsItemElements.length).toBe(2);
    expect(firstProductTitleElement).toBeInTheDocument();
    expect(secondProductTitleElement).toBeInTheDocument();
  });

  it("should remove product when button is clicked", () => {
    render(<Cart showCart={true} cart={[products[0]]} />);

    const removeProductButton = screen.getByRole('button', {name: "Remover"})

    userEvent.click(removeProductButton)

    expect(mockDispatch).toHaveBeenCalled()
    expect(mockDispatch).toHaveBeenCalledWith(removeProduct(products[0]))
    
  });
});

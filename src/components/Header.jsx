import { useContext } from "react";
import logoImage from "../assets/pizza-logo.svg";
import Button from "./ui/Button";
import CartContext from "../store/CartContext";

export default function Header() {
  const cartContext = useContext(CartContext);

  const totalItemsQuantity = cartContext.items.reduce(
    (totalNumberOfItems, item) => {
      return totalNumberOfItems + item.quantity;
    },
    0
  );

  function handleClickOnCart() {}

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImage} alt="Restaurant logo" />
        <h1>Pizza & More</h1>
      </div>
      <nav>
        <Button textOnly={true} onClick={handleClickOnCart}>
          Cart ({totalItemsQuantity})
        </Button>
      </nav>
    </header>
  );
}

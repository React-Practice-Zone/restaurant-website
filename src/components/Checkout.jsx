import { useContext } from "react";

import Modal from "./ui/Modal";
import Input from "./ui/Input";
import CartContext from "../store/CartContext";
import { PriceService } from "../util/price-service.util";
import Button from "./ui/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Checkout() {
  const cartContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);

  const priceService = new PriceService();

  const cartTotalPrice = priceService.getCartTotalPrice(cartContext);

  function handleCloseCheckout() {
    userProgressContext.hideCheckout();
  }

  return (
    <Modal
      open={userProgressContext.progress === "checkout"}
      onClose={handleCloseCheckout}
    >
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {cartTotalPrice}</p>

        <Input label={"Full Name"} id="full-name" type="text" />
        <Input label={"Email"} id="email" type="email" />
        <Input label={"Address"} id="address" type="text" />
        <div className="control-row">
          <Input label={"Postal Code"} id="postal-code" type="text" />
          <Input label={"City"} id="city" type="text" />
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly={true} onClick={handleCloseCheckout}>
            Close
          </Button>
          <Button textOnly={false}>Submit</Button>
        </p>
      </form>
    </Modal>
  );
}

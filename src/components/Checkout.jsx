import { useContext, useState } from "react";

import Modal from "./ui/Modal";
import Input from "./ui/Input";
import Button from "./ui/Button";
import ErrorModal from "./ui/ErrorModal";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { PriceService } from "../util/price-service.util";
import { useCreateOrder } from "../hooks/useCreateOrder";

export default function Checkout() {
  const cartContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const { createdOrder, isLoading, errorState, clearError } = useCreateOrder();

  const priceService = new PriceService();

  const cartTotalPrice = priceService.getCartTotalPrice(cartContext);

  function handleCloseCheckout() {
    userProgressContext.hideCheckout();
    setOrderSuccess(false);
  }

  // ! could be replaced with form actions
  async function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());

    const result = await createdOrder(customerData, cartContext);

    if (result.success) {
      cartContext.clearCart();
      setOrderSuccess(true);
    }
  }

  if (orderSuccess && !errorState) {
    return (
      <Modal
        open={userProgressContext.progress === "checkout"}
        onClose={handleCloseCheckout}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully!</p>
        <p className="modal-actions">
          <Button onClick={handleCloseCheckout}>Close</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      open={userProgressContext.progress === "checkout"}
      onClose={handleCloseCheckout}
    >
      <form onSubmit={handleFormSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {cartTotalPrice}</p>

        <Input label={"Name"} id="name" type="text" />
        <Input label={"Email"} id="email" type="email" />
        <Input label={"Address"} id="address" type="text" />
        <div className="control-row">
          <Input label={"Postal Code"} id="postal-code" type="text" />
          <Input label={"City"} id="city" type="text" />
        </div>

        {errorState && (
          <ErrorModal
            title="Failed to create order"
            message={errorState.message}
            onClose={clearError}
          />
        )}

        <p className="modal-actions">
          <Button type="button" textOnly={true} onClick={handleCloseCheckout}>
            Close
          </Button>
          {isLoading ? (
            <Button textOnly={true} disabled={isLoading}>
              Submitting...
            </Button>
          ) : (
            <Button textOnly={false} disabled={isLoading}>
              Submit
            </Button>
          )}
        </p>
      </form>
    </Modal>
  );
}

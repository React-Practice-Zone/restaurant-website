export class PriceService {
  formatPrice(price) {
    return `${Number(price).toFixed(2)}`;
  }

  currencyFormatter() {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
  }

  format(price) {
    return this.currencyFormatter().format(this.formatPrice(price));
  }

  getCartTotalPrice(cartContext) {
    return cartContext.items.reduce(
      (totalPrice, item) => totalPrice + item.quantity * item.price,
      0
    );
  }
}

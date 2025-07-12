export class FormatPrice {
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
}

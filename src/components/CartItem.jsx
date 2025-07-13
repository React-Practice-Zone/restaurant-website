import { PriceService } from "../util/price-service.util";

export default function CartItem({ item, onIncrease, onDecrease }) {
  const priceService = new PriceService();

  return (
    <li key={item.id + item.name} className="cart-item">
      <p>
        {item.name} - {item.quantity} x {priceService.format(item.price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{item.quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}

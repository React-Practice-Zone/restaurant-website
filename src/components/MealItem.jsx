import { useContext } from "react";

import Button from "./ui/Button";
import CartContext from "../store/CartContext";
import { PriceService } from "../util/price-service.util";

export default function MealItem({ meal }) {
  const cartContext = useContext(CartContext);

  const priceService = new PriceService();

  function handleAddToCart() {
    cartContext.addItem(meal);
  }

  return (
    <li key={meal?.id} className="meal-item">
      <article>
        {/* // ! remember about how to import images from backend */}
        <img src={`http://localhost:5050/${meal.image}`} alt={meal.name} />
        <div className="">
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{priceService.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddToCart}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
}

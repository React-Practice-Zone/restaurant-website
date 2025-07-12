import { FormatPrice } from "../util/format-price.util";
import Button from "./ui/Button";

const formatPrice = new FormatPrice();

export default function MealItem({ meal }) {
  function handleAddToCart() {}

  return (
    <li key={meal?.id} className="meal-item">
      <article>
        {/* // ! remember about how to import images from backend */}
        <img src={`http://localhost:5050/${meal.image}`} alt={meal.name} />
        <div className="">
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{formatPrice.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddToCart}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
}

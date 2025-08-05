import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { useMealDetails } from "../../hooks/useMealDetails";
import CartContext from "../../store/CartContext";
import { PriceService } from "../../util/price-service.util";
import Button from "../../components/ui/Button";
import ErrorModal from "../../components/ui/ErrorModal";
import "./MealDetails.css";

export default function MealDetails() {
  const { mealId } = useParams();
  const { meal, loading, errorState } = useMealDetails(mealId);
  const cartContext = useContext(CartContext);
  const priceService = new PriceService();

  if (loading) {
    return (
      <div
        className="loading-message"
        style={{ textAlign: "center", padding: "2rem" }}
      >
        <p>Loading meal details...</p>
      </div>
    );
  }

  if (errorState) {
    return (
      <ErrorModal title="Failed to fetch meal details" message={errorState} />
    );
  }

  if (!meal) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>Meal not found</h2>
        <p>The meal you're looking for doesn't exist.</p>
        <Link to="/meals">
          <Button>Back to Meals</Button>
        </Link>
      </div>
    );
  }

  function handleAddToCart() {
    cartContext.addItem(meal);
  }

  return (
    <div className="meal-details">
      <div className="meal-details-content">
        <Link to="/meals" className="back-link">
          <span className="back-arrow">←</span>
          <span>Back to Meals</span>
        </Link>

        <div className="meal-details-main">
          <div className="meal-image-large">
            <img src={`http://localhost:5050/${meal.image}`} alt={meal.name} />
          </div>

          <div className="meal-info">
            <h1>{meal.name}</h1>
            <p className="meal-price">{priceService.format(meal.price)}</p>
            <p className="meal-description">{meal.description}</p>

            <div className="meal-actions">
              <Button onClick={handleAddToCart} className="add-to-cart-btn">
                Add to Cart - {priceService.format(meal.price)}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

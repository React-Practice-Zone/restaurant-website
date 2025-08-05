import MealItem from "../../components/MealItem";
import ErrorModal from "../../components/ui/ErrorModal";
import { useMeals } from "../../hooks/useMeals";
import "./Meals.css";

export default function Meals() {
  const { meals, loading, errorState } = useMeals();

  if (loading) {
    return (
      <div className="meals-container">
        <div className="loading-message">
          <p>Fetching meals...</p>
        </div>
      </div>
    );
  }

  if (errorState) {
    return (
      <div className="meals-container">
        <ErrorModal title="Failed to fetch meals" message={errorState} />
      </div>
    );
  }

  return (
    <div className="meals-container">
      <div className="meals-header">
        <h1>Our Delicious Meals</h1>
        <p>Choose from our wide variety of freshly prepared dishes</p>
      </div>
      <ul className="meals-grid">
        {meals.map((meal) => (
          <MealItem key={meal?.id + meal.name} meal={meal} />
        ))}
      </ul>
    </div>
  );
}

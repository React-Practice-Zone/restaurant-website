import MealItem from "../components/MealItem";
import ErrorModal from "../components/ui/ErrorModal";
import { useMeals } from "../hooks/useMeals";

export default function Meals() {
  const { meals, loading, errorState } = useMeals();

  if (loading) {
    return (
      <div
        className="loading-message"
        style={{ textAlign: "center", padding: "2rem" }}
      >
        <p>Fetching meals...</p>
      </div>
    );
  }

  if (errorState) {
    return <ErrorModal title="Failed to fetch meals" message={errorState} />;
  }

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal?.id + meal.name} meal={meal} />
      ))}
    </ul>
  );
}

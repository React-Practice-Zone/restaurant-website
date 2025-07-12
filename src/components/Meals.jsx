import { useMeals } from "../hooks/useMeals";
import MealItem from "./MealItem";

export default function Meals() {
  const { meals, loading, errorState } = useMeals();

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal?.id + meal.name} meal={meal} />
      ))}
    </ul>
  );
}
